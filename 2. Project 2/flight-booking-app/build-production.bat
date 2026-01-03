@echo off
echo Building Flight Booking App for Production...

echo Installing dependencies...
call npm install
cd backend && call npm install
cd ../frontend && call npm install
cd ..

echo Building frontend...
cd frontend && call npm run build
cd ..

echo Starting production servers...
echo Backend will run on port 5001
echo Frontend build is ready for deployment

echo Production build complete!
echo Deploy the frontend/build folder to your web server
echo Start backend with: cd backend && npm start

pause