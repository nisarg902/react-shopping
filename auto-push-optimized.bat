@echo off
:loop
REM Check for changes
git status --porcelain > temp.txt
for /f %%i in ('type temp.txt') do (
    set changes=1
)

if defined changes (
    git add .
    git commit -m "auto update"
    git push origin master
    set changes=
)
del temp.txt
timeout /t 10 >nul
goto loop
