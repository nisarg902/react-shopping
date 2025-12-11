@echo off
:loop
git add .
git commit -m "auto update"
git push origin master
timeout /t 60 >nul
goto loop
