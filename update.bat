@echo off
cd /d "C:\Users\dade\Documents\LMS pembelajaran"
echo === CEK STATUS AWAL ===
git status
echo.

echo === ADD SEMUA FILE ===
git add .
echo.

echo === COMMIT ===
git commit -m "Update otomatis %date% %time%"
echo.

echo === PUSH KE GITHUB ===
git push -f origin main
echo.

echo === SELESAI ===
echo Cek di: https://github.com/dade92-gr/tembokbelajar
pause