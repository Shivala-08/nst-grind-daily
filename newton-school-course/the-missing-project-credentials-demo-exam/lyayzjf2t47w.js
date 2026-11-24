#!/usr/bin/env bash
set -euo pipefail

# Locate EventApp directory
if [ -d "EventApp" ]; then
  target_dir="EventApp"
elif [ -d "./EventApp" ]; then
  target_dir="./EventApp"
else
  target_dir="$(find . -maxdepth 4 -type d -name "EventApp" 2>/dev/null | head -n 1)"
fi

if [ -z "${target_dir:-}" ] || [ ! -d "$target_dir" ]; then
  echo "EventApp directory not found." >&2
  exit 1
fi

out_file="$target_dir/db_password.txt"

# Search all files (including hidden files and nested subdirectories) for DB_PASSWORD=
match="$(
  find "$target_dir" -type f ! -name "db_password.txt" -exec grep -hE '^DB_PASSWORD=' {} + 2>/dev/null \
    | head -n 1 \
    || true
)"

if [ -z "$match" ]; then
  echo "DB_PASSWORD entry not found in $target_dir" >&2
  exit 1
fi

# Write exact line (key and value) to db_password.txt inside EventApp
printf '%s\n' "$match" > "$out_file"