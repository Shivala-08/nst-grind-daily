mkdir -p backup
cp app/.env backup/env_backup.txt
rm -f app/.cache_tmp
mv app/.settings app/settings.txt
chmod 600 app/.env
ls -la app backup