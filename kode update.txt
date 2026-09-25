@echo off
chcp 65001 > nul
setlocal enabledelayedexpansion

cd /d "D:\website\LMS pembelajaran" || (
    echo ❌ ERROR: Gagal pindah ke direktori "D:\website\LMS pembelajaran"
    echo    Pastikan folder tersebut ada.
    pause
    exit /b 1
)

echo.
echo ========================================
echo        PROSES UPDATE KE GITHUB
echo ========================================
echo.

REM --- CEK GIT TERINSTALL ---
where git > nul 2>&1
if errorlevel 1 (
    echo ❌ ERROR: Git tidak ditemukan.
    echo    Pastikan Git sudah terinstall dan terdaftar di PATH.
    pause
    exit /b 1
)

echo [1] Menambahkan semua file yang berubah...
git add -A
if errorlevel 1 (
    echo ❌ ERROR: Gagal menambahkan file.
    pause
    exit /b 1
)
echo ✅ Berhasil menambahkan file.
echo.

REM --- FORMAT TANGGAL AMAN (YYYY-MM-DD_HH-MM-SS) ---
for /f "tokens=1-3 delims=/" %%a in ("%date%") do (
    set "dd=%%a"
    set "mm=%%b"
    set "yyyy=%%c"
)

for /f "tokens=1-3 delims=:." %%a in ("%time%") do (
    set "hh=%%a"
    set "min=%%b"
    set "ss=%%c"
)

set "hh=%hh: =0%"

set "tanggal_aman=%yyyy%-%mm%-%dd%_%hh%-%min%-%ss%"

echo [2] Menyimpan perubahan...
git commit -m "Auto update: %tanggal_aman%" --allow-empty
if errorlevel 1 (
    echo ❌ ERROR: Gagal commit.
    pause
    exit /b 1
)
echo ✅ Berhasil commit.
echo.

echo [3] Mengirim ke GitHub (overwrite remote)...
git push origin main --force
if errorlevel 1 (
    echo ❌ ERROR: Gagal push ke GitHub.
    echo    Periksa koneksi internet dan pastikan Anda memiliki akses ke repository.
    pause
    exit /b 1
)
echo ✅ Berhasil push ke GitHub.
echo.

echo ========================================
echo ✅ UPDATE SELESAI!
echo ========================================
echo.

echo 📁 File yang baru saja diupdate:
git diff --name-only HEAD~1 HEAD
echo.

echo ========================================
pause