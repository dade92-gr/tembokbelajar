@echo off
cd /d "D:\website\LMS pembelajaran"

echo.
echo ========================================
echo        PROSES UPDATE KE GITHUB
echo ========================================
echo.

echo [1] Menambahkan semua file yang berubah...
git add .
echo.

echo [2] Menyimpan perubahan...
git commit -m "Auto update: %date% %time%"
echo.

echo [3] Mengirim ke GitHub...
git push origin main
echo.

echo ========================================
echo ✅ UPDATE SELESAI!
echo ========================================
echo.

echo File yang baru saja diupdate:
git diff --name-only HEAD~1 HEAD
echo.

echo ========================================
pause