pwd
ls -la
find / -name "EventApp" 2>/dev/null
grep -rn "DB_PASSWORD" / 2>/dev/null | head -n 20