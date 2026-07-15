$ErrorActionPreference = "Stop"

Write-Host "===============================" -ForegroundColor Cyan
Write-Host "   LifeMeasure 部署脚本" -ForegroundColor Cyan
Write-Host "===============================" -ForegroundColor Cyan
Write-Host ""

try {
    Write-Host "1. 构建项目..." -ForegroundColor Yellow
    npm run build
    Write-Host "构建成功！" -ForegroundColor Green
    Write-Host ""

    Write-Host "2. 推送代码到 GitHub..." -ForegroundColor Yellow
    git add .
    git commit -m "Deploy to GitHub Pages"
    git push origin main
    Write-Host "推送成功！" -ForegroundColor Green
    Write-Host ""

    Write-Host "3. 部署到 GitHub Pages..." -ForegroundColor Yellow
    npm run deploy
    Write-Host "部署成功！" -ForegroundColor Green
    Write-Host ""

    Write-Host "访问地址: https://borisyuan1987.github.io/LifeMeasure/" -ForegroundColor Cyan
} catch {
    Write-Host "部署失败: $_" -ForegroundColor Red
    Write-Host ""
    Write-Host "请手动执行以下命令:" -ForegroundColor Yellow
    Write-Host "  npm run build"
    Write-Host "  git push origin main"
    Write-Host "  npm run deploy"
}