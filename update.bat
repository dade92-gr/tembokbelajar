@echo off
cd /d "C:\Users\dade\Documents\LMS pembelajaran"
echo === CEK STATUS ===
git status
echo.
echo === ADD SEMUA FILE ===
git add .
echo.
echo === CEK STATUS LAGI (HARUSNYA HIJAU) ===
git status
echo.
echo === COMMIT ===
set /p pesan="Masukkan pesan update: "
git commit -m "%pesan%"
echo.
echo === PUSH KE GITHUB ===
git push -f origin main
echo.
echo === SELESAI ===
echo Cek di: https://github.com/dade92-gr/tembokbelajar
pause