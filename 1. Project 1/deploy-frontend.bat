@echo off
echo Building frontend...
cd /d "d:\Vetri-Nichayam\Assignments\MERN-Ecommerce\frontend"
call npm install
call npm run build

echo Deploying frontend to Vercel...
call npx vercel --prod

echo.
echo Deployment complete! Check the URL above.
pause