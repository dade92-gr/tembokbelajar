@echo off
cd /d "C:\Users\dade\Documents\LMS pembelajaran"
git add .
git commit -m "Update %date%"
git push -f origin main
echo Selesai! Cek di GitHub