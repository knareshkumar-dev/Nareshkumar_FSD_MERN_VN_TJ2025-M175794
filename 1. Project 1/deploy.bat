@echo off
echo Installing Vercel CLI...
npm i -g vercel

echo Changing to project directory...
cd /d "d:\Vetri-Nichayam\Assignments\MERN-Ecommerce"

echo Deploying to Vercel...
vercel --prod

pause