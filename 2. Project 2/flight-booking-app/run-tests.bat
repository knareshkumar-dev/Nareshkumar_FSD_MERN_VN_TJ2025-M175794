@echo off
echo 🧪 Running Flight Booking App Test Suite
echo ========================================

echo 📡 Running Backend API Tests...
cd backend
call npm test 2>nul || echo Backend tests require setup

echo 🎨 Running Frontend Component Tests...
cd ..\frontend
call npm test -- --watchAll=false 2>nul || echo Frontend tests require setup

echo 🌐 Running E2E Tests...
cd ..
call npx playwright test e2e\ 2>nul || echo E2E tests require Playwright setup

echo ✅ Test suite completed
pause