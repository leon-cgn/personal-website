import type { RequestHandler } from '@sveltejs/kit';
// import puppeteer from 'puppeteer-core';
import puppeteer from 'puppeteer';

export const GET: RequestHandler = async ({ url }) => {
	const lang = String(url.searchParams.get('lang') ?? 'de');

	// const getBrowser = async () => {
	// 	return puppeteer.launch({
	// 		args: [...chromium.args, '--hide-scrollbars', '--disable-web-security'],
	// 		defaultViewport: chromium.defaultViewport,
	// 		executablePath: await chromium.executablePath(
	// 			`https://github.com/Sparticuz/chromium/releases/download/v116.0.0/chromium-v116.0.0-pack.tar`
	// 		),
	// 		headless: chromium.headless,
	// 		ignoreHTTPSErrors: true
	// 	});
	// };

	const browser = await puppeteer.launch({ headless: true });
	const page = await browser.newPage();
	await page.goto('http://127.0.0.1:5173', { waitUntil: 'networkidle0' });

	// Change lang if requested
	if (lang === 'de') {
		const langButtonEnSelector = '#button-lang-en';
		await page.click(langButtonEnSelector);
	}

	// Remove download cv button
	const downloadCvButtonSelector = '#download-cv-button';
	const downloadCvButton = await page.waitForSelector(downloadCvButtonSelector);
	await downloadCvButton?.evaluate((el) => el.remove());

	// Remove header
	const headerSelector = '#header-lang-picker';
	const header = await page.waitForSelector(headerSelector);
	await header?.evaluate((el) => el.remove());

	// Remove footer
	const footerSelector = '#footer-imprint-privacy';
	const footer = await page.waitForSelector(footerSelector);
	await footer?.evaluate((el) => el.remove());

	const pdf = await page.pdf({ format: 'A4' });

	await browser.close();

	return new Response(pdf, { headers: [['lang', lang]] });
};
