# Playwright Performance Trace Examples

인터렉션 퍼포먼스 측정 환경 examples

## working list

<details><summary>scroll</summary>

[바로가기](./tests/scroll.spec.ts)

- ![](./static/scroll.gif)

</details>

<details><summary>drag</summary>

[바로가기](./tests/drag.spec.ts)

- ![](./static/drag.gif)

</details>

## useage

- install

  ```bash
  $ yarn
  $ npx playwright install
  ```

- test

  ```
  $yarn test
  ```

- playwright의 `trace.json` 결과물을 chrom devtool performance 탭에 드래그 앤 드랍

## API

- https://playwright.dev/docs/api/class-browser#browser-start-tracing

## Reference

- [playwright](https://playwright.dev/)
- https://web.dev/learn-web-vitals/
- https://csstriggers.com/
- https://gist.github.com/paulirish/5d52fb081b3570c81e3a
