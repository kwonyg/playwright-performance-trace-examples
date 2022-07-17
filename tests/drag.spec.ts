import { ElementHandle, Page, test } from '@playwright/test';

const WINDOW_WIDTH = 1800;
const WINDOW_HEIGHT = 800;

test('drag performance test', async ({ browser, page }) => {
  await page.setViewportSize({
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT,
  });
  await page.goto('https://map.naver.com/');

  const element = await page.locator('#baseMap');
  const box = await element.boundingBox();

  if (!box) throw new Error('엘리먼트를 찾을 수 없습니다.');

    await browser.startTracing(page, { path: 'drag-trace.json' });

    for (let i = 0; i < 5; i++) {
      // left
      await page.mouse.move(900,300);
      await page.mouse.down();
      await page.mouse.move(1400,300,{steps: 10});
      await page.mouse.up();
      
      await page.mouse.move(1400,300);
      await page.mouse.down();
      await page.mouse.move(900,300,{steps: 10});
      await page.mouse.up();


      // up
      await page.mouse.move(900,300);
      await page.mouse.down();
      await page.mouse.move(900,600,{steps: 10});
      await page.mouse.up();

      await page.mouse.move(900,600);
      await page.mouse.down();
      await page.mouse.move(900,300,{steps: 10});
      await page.mouse.up();

      // right
      await page.mouse.move(900,300);
      await page.mouse.down();
      await page.mouse.move(600,300,{steps: 10});
      await page.mouse.up();

      await page.mouse.move(600,300);
      await page.mouse.down();
      await page.mouse.move(900,300,{steps: 10});
      await page.mouse.up();

       // down
       await page.mouse.move(900,300);
       await page.mouse.down();
       await page.mouse.move(900, 0, {steps: 10});
       await page.mouse.up();

       await page.mouse.move(900, 0);
       await page.mouse.down();
       await page.mouse.move(900, 300,{steps: 10});
       await page.mouse.up();
    }

    await browser.stopTracing();
});
