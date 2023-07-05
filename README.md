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

This is similar to:

```html
<div class="text-red-5 bg-red-5 bg-opacity-70">
  content
</div>
``` 

This way we can use corresponding colors on other common styles

```html
<div class="w-20 h-10 rounded-md grid place-items-center bg-blue-5 ripple text-white">
  button
</div>
<div class="w-20 h-10 rounded-md grid place-items-center bg-red-5 ripple text-white">
  button
</div>
```

```css
.ripple {
  background-position: center;
  transition: background 0.8s;
}
.ripple:hover {
  background: rgba(var(--un-bg-color), 1) radial-gradient(circle, transparent 1%, rgba(var(--un-bg-color), 1) 1%) center/15000%;
}
.ripple:active {
  background-color: rgba(var(--un-bg-color), 0.5);
  background-size: 100%;
  transition: background 0s;
}
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
