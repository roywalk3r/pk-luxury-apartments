const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';
const OUT_DIR = process.env.OUT_DIR || path.join(__dirname, 'screenshots');

if (fs.existsSync(OUT_DIR)) fs.rmSync(OUT_DIR, { recursive: true });
fs.mkdirSync(OUT_DIR, { recursive: true });

async function screenshot(page, name) {
  const file = path.join(OUT_DIR, `${name}.png`);
  await page.screenshot({ path: file, fullPage: true });
  console.log(`Screenshot: ${file}`);
}

async function login(page, email, password, expectedPath) {
  await page.goto(`${BASE_URL}/login`);
  await page.waitForSelector('input[name="email"]');
  await page.fill('input[name="email"]', email);
  await page.fill('input[name="password"]', password);
  await Promise.all([
    page.waitForNavigation({ waitUntil: 'networkidle', timeout: 10000 }).catch(() => {}),
    page.click('button[type="submit"]'),
  ]);
  await page.waitForURL((url) => url.pathname === expectedPath, { timeout: 10000 });
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(600);
}

async function visit(page, url, name) {
  await page.goto(`${BASE_URL}${url}`);
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(500);
  await screenshot(page, name);
}

async function captureAdminFlow(browser) {
  const context = await browser.newContext({ viewport: { width: 1280, height: 720 } });
  const page = await context.newPage();

  await login(page, 'admin@example.com', 'admin123', '/admin/dashboard');
  await screenshot(page, '03-admin-logged-in');

  await visit(page, '/admin/dashboard', '04-admin-dashboard');
  await visit(page, '/admin/rooms', '05-admin-rooms');
  await visit(page, '/admin/tenants', '06-admin-tenants');
  await visit(page, '/admin/bills', '07-admin-bills');
  await visit(page, '/admin/payments', '08-admin-payments');
  await visit(page, '/admin/maintenance', '09-admin-maintenance');
  await visit(page, '/admin/equipment', '10-admin-equipment');
  await visit(page, '/admin/announcements', '11-admin-announcements');
  await visit(page, '/admin/bookings', '12-admin-bookings');
  await visit(page, '/admin/reports', '13-admin-reports');

  await context.close();
}

async function captureTenantFlow(browser) {
  const context = await browser.newContext({ viewport: { width: 1280, height: 720 } });
  const page = await context.newPage();

  await login(page, 'tenant1@example.com', 'tenant123', '/dashboard');
  await screenshot(page, '14-tenant-logged-in');

  await visit(page, '/dashboard', '15-tenant-dashboard');
  await visit(page, '/payments', '16-tenant-payments');
  await visit(page, '/bills', '17-tenant-bills');
  await visit(page, '/maintenance', '18-tenant-maintenance');
  await visit(page, '/notifications', '19-tenant-notifications');
  await visit(page, '/profile', '20-tenant-profile');

  await context.close();
}

(async () => {
  const browser = await chromium.launch({ headless: true });

  {
    const context = await browser.newContext({ viewport: { width: 1280, height: 720 } });
    const page = await context.newPage();
    await visit(page, '/', '01-landing');
    await visit(page, '/rooms', '02-public-rooms');
    await context.close();
  }

  await captureAdminFlow(browser);
  await captureTenantFlow(browser);

  await browser.close();
  console.log('Walkthrough complete.');
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
