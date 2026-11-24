cd Project || exit 1

# 1. Create an empty file named index.txt in the Project directory
touch index.txt

# 2. Create Backup and copy the entire src directory into it (preserving files and contents)
mkdir -p Backup
cp -r src Backup/

# 3. Move logo.png from assets into Backup
mv assets/logo.png Backup/

# 4. Copy .config/version.txt into the root Project directory
cp .config/version.txt .

# 5. Rename draft.txt to README.txt and move it into Backup
mv draft.txt Backup/README.txt

# 6. Combine docs/setup.txt and docs/usage.txt into Backup/documentation.txt
cat docs/setup.txt docs/usage.txt > Backup/documentation.txt

# 7. Append "Backup completed" as a new line at the end of Backup/documentation.txt
echo "Backup completed" >> Backup/documentation.txt

# 8. Delete old_app.py from original src and delete temp.txt
rm -f src/old_app.py temp.txt

# 9. Remove assets and docs directories after handling their contents
rm -rf assets docs

# 10. Create an empty file named backup.log inside Backup
touch Backup/backup.log