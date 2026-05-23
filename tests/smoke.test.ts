import { expect, test } from '@playwright/test';

// Routes that should have a standard page layout with h1
const standardRoutes = [
	'/',
	'/about',
	'/about-superbloom',
	'/about-superbloom/photoshop',
	'/about-zeus',
	'/about-colortheater',
	'/about-spritereplicator',
	'/about-progenflares2',
	'/about-progenflares2/photoshop',
	'/photoshop-plugins',
	'/blog',
	'/blog/1',
	'/blog/2',
	'/blog/3',
	'/blog/4',
	'/videotutorials',
	'/communityresources',
	'/communityresources/submit',
	'/sociallinks',
	'/contact',
	'/bugreport',
	'/ghdownloads',
	'/weblauncher'
];

// Routes that embed external apps (no h1, just toolbar + iframe)
const appRoutes = [
	'/weblauncher/superbloom',
	'/weblauncher/zeus',
	'/weblauncher/spritereplicator',
	'/weblauncher/colortheater',
	'/weblauncher/progenflares2'
];

for (const route of standardRoutes) {
	test(`${route} renders without error`, async ({ page }) => {
		const response = await page.goto(route);
		expect(response?.status()).toBe(200);

		// Page has content
		const body = await page.textContent('body');
		expect(body?.length).toBeGreaterThan(0);

		// Has exactly one h1
		const h1Count = await page.locator('h1').count();
		expect(h1Count).toBe(1);
	});
}

for (const route of appRoutes) {
	test(`${route} renders without error`, async ({ page }) => {
		const response = await page.goto(route);
		expect(response?.status()).toBe(200);

		// Has an iframe for the embedded app
		const iframe = page.locator('iframe');
		await expect(iframe).toBeAttached();
	});
}

test('navigation bar is present on all pages', async ({ page }) => {
	await page.goto('/');
	const nav = page.locator('nav[aria-label="Main navigation"]');
	await expect(nav).toBeVisible();
});

test('footer is present on all pages', async ({ page }) => {
	await page.goto('/');
	const footer = page.locator('footer');
	await expect(footer).toBeVisible();
});

test('404 page renders for unknown routes', async ({ page }) => {
	await page.goto('/nonexistent-page');
	const heading = await page.textContent('h1');
	expect(heading).toContain('404');
});
