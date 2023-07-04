import type { Postprocessor, UtilObject } from '@unocss/core'

export interface PostprocessorColorsOptions {
  keys?: Partial<Record<keyof typeof defaultKeys, string>>
}
const defaultKeys = {
  'background-color': '--un-bg-color',
  'color': '--un-color',
  'text-decoration-color': '--un-text-decoration-color',
  'border-color': '--un-border-color',
  'caret-color': '--un-caret-color',
  'shadow-color': '--un-sh-color', // shadow-color itself is a variable
} as const
export default function postprocessorColors(options?: PostprocessorColorsOptions): Postprocessor {
  return colorsPostprocessor(options)
}

export function colorsPostprocessor(options: PostprocessorColorsOptions = {}): Postprocessor {
  let { keys } = options
  keys = Object.assign({}, defaultKeys, keys) as Record<keyof typeof defaultKeys, string>

  return (util: UtilObject) => {
    const rgbaRE = /rgba\((\d+,\d+,\d+),([^)]*)\)/
    // console.log('util', util)
    util.entries.forEach((i) => {
      const value = i[1]
      if (typeof value === 'string' && value.match(rgbaRE) != null) {
        const match = value.match(rgbaRE)
        let key = i[0]
        if (key === '--un-shadow-color')
          key = 'shadow-color'

        const variableKey = keys![key as keyof typeof defaultKeys]
        if (variableKey) {
          i[1] = value.replace(rgbaRE, `rgba(var(${variableKey}),$2)`)
          match && util.entries.unshift([variableKey, match[1]])
        }
      }
    })
  }
}
