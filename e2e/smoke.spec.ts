import { test, expect } from '@playwright/test';

const pages = [
  { path: '/', h1: 'No Human Left Behind.', key: 'Technology, ethics, and humanity evolving together.' },
  { path: '/about', h1: 'The wiz who dove in sideways.', key: 'AI Enablement Engineer' },
  { path: '/the-hot-dog', h1: /hot dog/i, key: 'codewizwit' },
  { path: '/frameworks', h1: 'Frameworks', key: 'No Human Left Behind' },
  { path: '/frameworks/the-lift', h1: 'The Lift', key: 'Encoding Intent' },
  { path: '/frameworks/four-lenses', h1: 'The Four Lenses', key: 'Developer Experience' },
  { path: '/writing', h1: 'Signals from the field.', key: 'Dispatch' },
  { path: '/connect', h1: /build something together/i, key: '' },
  { path: '/speaking', h1: /./i, key: '', skipH1Count: true },
  { path: '/projects', h1: 'Shipped work.', key: '' },
];

for (const pg of pages) {
  test(`${pg.path} loads with correct h1`, async ({ page }) => {
    const errors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') errors.push(msg.text());
    });

    await page.goto(pg.path);

    // h1 exists (at least one)
    const h1Elements = page.locator('h1');
    if (!pg.skipH1Count) {
      await expect(h1Elements).toHaveCount(1);
    } else {
      const count = await h1Elements.count();
      expect(count).toBeGreaterThan(0);
    }

    // h1 text matches
    if (typeof pg.h1 === 'string') {
      await expect(h1Elements.first()).toContainText(pg.h1);
    } else {
      await expect(h1Elements.first()).toHaveText(pg.h1);
    }

    // Key content present
    if (pg.key) {
      await expect(page.locator('body')).toContainText(pg.key);
    }

    // Footer present
    await expect(page.locator('footer')).toBeVisible();

    // No console errors
    expect(errors).toEqual([]);
  });
}

test('framework descriptions match between homepage and frameworks index', async ({ page }) => {
  await page.goto('/');
  const homeLiftDesc = await page.locator('.fw-teaser-desc').first().textContent();
  const homeFourLensesDesc = await page.locator('.fw-teaser-desc').nth(1).textContent();

  await page.goto('/frameworks');
  const fwLiftDesc = await page.locator('.fw-desc').first().textContent();
  const fwFourLensesDesc = await page.locator('.fw-desc').nth(1).textContent();

  // Normalize whitespace for comparison
  const normalize = (s: string | null) => s?.replace(/\s+/g, ' ').trim();
  expect(normalize(homeLiftDesc)).toBe(normalize(fwLiftDesc));
  expect(normalize(homeFourLensesDesc)).toBe(normalize(fwFourLensesDesc));
});

test('navigation links resolve', async ({ page }) => {
  await page.goto('/');
  const navLinks = page.locator('.nav-link');
  const count = await navLinks.count();
  expect(count).toBeGreaterThan(0);

  for (let i = 0; i < count; i++) {
    const href = await navLinks.nth(i).getAttribute('href');
    if (href) {
      const response = await page.request.get(href);
      expect(response.status()).toBe(200);
    }
  }
});

test('footer has trademark text', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('footer')).toContainText('Alexandra Kelstrom');
  await expect(page.locator('footer')).toContainText('The Lift');
});
