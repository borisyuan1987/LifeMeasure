@echo off
chcp 65001 >nul
echo ===============================
echo   LifeMeasure 部署脚本
echo ===============================
echo.

set NODE_PATH=C:\Users\Administrator\.workbuddy\binaries\node\versions\22.22.2
set PATH=%NODE_PATH%;%PATH%

echo 1. 构建项目...
call npm run build
if %errorlevel% neq 0 (
    echo 构建失败！
    pause
    exit /b 1
)
echo 构建成功！
echo.

echo 2. 部署到 GitHub Pages...
call npm run deploy
if %errorlevel% neq 0 (
    echo 部署失败，请手动执行以下命令：
    echo.
    echo   git push origin main
    echo   npm run deploy
    echo.
    pause
    exit /b 1
)
echo 部署成功！
echo.
echo 访问地址: https://borisyuan1987.github.io/LifeMeasure/
pause