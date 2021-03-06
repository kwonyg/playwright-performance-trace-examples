import { test } from '@playwright/test';

test('scroll performance test', async ({ browser, page }) => {
  await page.setViewportSize({
    width: 360,
    height: 740,
  });
  await page.goto('https://m.search.naver.com/search.naver?where=m_view&sm=mtb_jum&query=bts');

  await browser.startTracing(page, { path: 'scroll-trace.json', screenshots: true });

  // 특정 요소까지 scroll
  for (let i = 0; i < 10; i++) {
    await page.$eval('.u_pg_btn', (e) => {
      e.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'end' });
    });
    await page.waitForTimeout(2000);
  }

  await browser.stopTracing();
});
``;
