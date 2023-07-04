import {
  defineConfig,
  presetAttributify,
  presetUno,
} from 'unocss'
import postprocessorColors from 'unocss-postprocessor-colors'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
  ],
  postprocess: [
    postprocessorColors({
      keys: {
        'background-color': '--un-bg-color',
      },
    }),
  ],
})
