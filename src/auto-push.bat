@echo off
:loop
git add .
git commit -m "auto update"
git push origin main
timeout /t 60 >nul
goto loop
