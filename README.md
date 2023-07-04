# unocss-postprocessor-colors [![npm](https://img.shields.io/npm/v/unocss-postprocessor-colors.svg)](https://npmjs.com/package/unocss-postprocessor-colors)

Transform alias for UnoCSS shortcuts.

## Install
```shell
pnpm i -D unocss-postprocessor-colors
```

```ts
// uno.config.ts
import { defineConfig } from 'unocss'
import postprocessorColors from 'unocss-postprocessor-colors'

export default defineConfig({
  // ...
  postprocess: [
    // ...
    postprocessorColors(),
  ],
})
```

## Usage

```html
<div class="text-red-5 bg-[rgba(var(--un-color),0.7)]">
  content
</div>
```

Will be transformed to:

```html
<div class="text-red-5 bg-red-5 bg-opacity-70">
  content
</div>
``` 

## Options

> Can customize the corresponding variable name

```ts
postprocessorColors({
  /**
   * default
   * {
   *    'background-color': '--un-bg-color',
   *    'color': '--un-color',
   *    'text-decoration-color': '--un-text-decoration-color',
   *    'border-color': '--un-border-color',
   *    'caret-color': '--un-caret-color',
   *    'shadow-color': '--un-sh-color',
   * }
   */
  key: {
    'background-color': '--un-b-color',
  }
})

```

## Other 
Thanks to [@zyyv](https://github.com/zyyv) for the solution

## License

MIT License &copy; 2023-PRESENT [Amihhs](https://github.com/amihhs)
