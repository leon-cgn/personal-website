import { writeFileSync } from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';

// TODO Use custom styling, maybe with data-is-pdf to generate a nice printable layout
const lang = process.env.PDF_LANG;

const fileName = `Leon-Schirmer-CV-${lang}.pdf`;
const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();
await page.goto('http://127.0.0.1:5173', { waitUntil: 'networkidle0' });

// change data-is-pdf on all html tags to apply pdf styling
await page.evaluate(() => {
	const elements = document.querySelectorAll('*');
	for (let element of elements) {
		element.setAttribute('data-is-pdf', 'true');
	}
});

// Change page lang to en
if (lang === 'en') {
	const langButtonEnSelector = '#button-lang-en';
	await page.click(langButtonEnSelector);
}

// Remove header
const headerSelector = '#header-lang-picker';
const header = await page.waitForSelector(headerSelector);
await header?.evaluate((el) => el.remove());

// Remove footer
const footerSelector = '#footer-imprint-privacy';
const footer = await page.waitForSelector(footerSelector);
await footer?.evaluate((el) => el.remove());

// Fix waving emoji
const waveEmojiSelector = '#waving-emoji';
const waveEmoji = await page.waitForSelector(waveEmojiSelector);
await waveEmoji?.evaluate((el) => el.replaceWith('👋'));

const pdf = await page.pdf({ format: 'A4' });

// write de cv
const pdfAssetDir = path.join(process.cwd(), 'src', 'lib', 'assets', 'cv', fileName);
writeFileSync(pdfAssetDir, pdf);

await browser.close();
