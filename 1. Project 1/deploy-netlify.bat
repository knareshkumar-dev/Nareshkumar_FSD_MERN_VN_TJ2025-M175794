@echo off
echo Building ShopEZ frontend...
cd /d "d:\Vetri-Nichayam\Assignments\MERN-Ecommerce\frontend"
call npm install
call npm run build

echo.
echo Build complete! 
echo.
echo Next steps:
echo 1. Go to https://netlify.com
echo 2. Drag and drop the 'dist' folder to deploy
echo 3. Your 'dist' folder is at: d:\Vetri-Nichayam\Assignments\MERN-Ecommerce\frontend\dist
echo.
pause