#!/usr/bin/env bash
set -euo pipefail

# Locate EventApp directory (checks current directory or parent/home if needed)
if [ -d "EventApp" ]; then
  target_dir="EventApp"
elif [ -d "./EventApp" ]; then
  target_dir="./EventApp"
else
  target_dir="$(find . -maxdepth 3 -type d -name "EventApp" 2>/dev/null | head -n 1)"
fi

if [ -z "${target_dir:-}" ] || [ ! -d "$target_dir" ]; then
  echo "EventApp directory not found." >&2
  exit 1
fi

out_file="$target_dir/db_password.txt"

# Search all files (including hidden files and subdirectories) for DB_PASSWORD=
# Exclude the output file itself in case it already exists
match="$(grep -rh --exclude="db_password.txt" '^DB_PASSWORD=' "$target_dir" 2>/dev/null | head -n 1 || true)"

# Fallback using find if grep needs explicit traversal
if [ -z "$match" ]; then
  while IFS= read -r -d '' file; do
    if [ "$(basename "$file")" != "db_password.txt" ] && [ -f "$file" ]; then
      line="$(grep -m 1 '^DB_PASSWORD=' "$file" 2>/dev/null || true)"
      if [ -n "$line" ]; then
        match="$line"
        break
      fi
    fi
  done < <(find "$target_dir" -type f -print0 2>/dev/null)
fi

if [ -z "$match" ]; then
  echo "DB_PASSWORD entry not found inside $target_dir." >&2
  exit 1
fi

printf '%s\n' "$match" > "$out_file"