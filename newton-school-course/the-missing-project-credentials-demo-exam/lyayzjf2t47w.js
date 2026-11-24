#!/usr/bin/env bash
set -euo pipefail

target_dir=""
for d in "EventApp" "./EventApp" "../EventApp" "/app/EventApp" "/root/EventApp"; do
  if [ -d "$d" ]; then
    target_dir="$d"
    break
  fi
done

if [ -z "$target_dir" ]; then
  target_dir="$(find . .. /app /root /home -maxdepth 3 -type d -name "EventApp" 2>/dev/null | head -n 1 || true)"
fi

if [ -z "$target_dir" ] || [ ! -d "$target_dir" ]; then
  echo "EventApp directory not found" >&2
  exit 1
fi

out_file="$target_dir/db_password.txt"

line="$(
  find "$target_dir" -type f ! -name "db_password.txt" -exec grep -Ih --binary-files=without-match -E '^[[:space:]]*DB_PASSWORD=' {} + 2>/dev/null \
    | head -n 1 \
    || true
)"

if [ -z "$line" ]; then
  echo "DB_PASSWORD not found in $target_dir" >&2
  exit 1
fi

printf '%s\n' "$line" > "$out_file"