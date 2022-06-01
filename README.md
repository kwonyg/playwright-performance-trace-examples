# Playwright Performance Trace Examples

인터렉션 퍼포먼스 측정 환경 examples

## working list

<details><summary>scroll</summary>

[바로가기](./tests/scroll.spec.ts)

- ![](./static/scroll.gif)

</details>

## useage

- install

  ```bash
  $ yarn
  $ npx playwright install
  ```

- excute

  ```
  $yarn test
  ```

- playwright의 `trace.json` 결과물을 chrom devtool performance 탭에 드래그 앤 드랍

## API

- https://playwright.dev/docs/api/class-browser#browser-start-tracing
