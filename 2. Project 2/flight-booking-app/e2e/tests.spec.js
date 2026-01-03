const { test, expect } = require('@playwright/test');

test.describe('Flight Booking App E2E', () => {
  test('homepage loads correctly', async ({ page }) => {
    await page.goto('http://localhost:3000');
    
    await expect(page.locator('nav')).toBeVisible();
    await expect(page.getByText('✈️ FlightBooking')).toBeVisible();
    await expect(page.getByText('Your Journey Begins Here')).toBeVisible();
  });

  test('search form validation works', async ({ page }) => {
    await page.goto('http://localhost:3000');
    
    await page.click('button:has-text("Search Flights")');
    
    await expect(page.getByText('Please select a departure city')).toBeVisible();
    await expect(page.getByText('Please select a destination city')).toBeVisible();
  });

  test('navigation works', async ({ page }) => {
    await page.goto('http://localhost:3000');
    
    await page.click('a:has-text("Flights")');
    await expect(page.url()).toContain('/flights');
    
    await page.click('a:has-text("Home")');
    await expect(page.url()).toBe('http://localhost:3000/');
  });

  test('responsive design works', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('http://localhost:3000');
    
    await expect(page.locator('nav')).toBeVisible();
    await expect(page.locator('.hero')).toBeVisible();
  });
});