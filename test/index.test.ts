import type { UtilObject } from '@unocss/core'
import { describe, expect, test } from 'vitest'
import { colorsPostprocessor } from '../src'

describe('postprocessor colors variable', () => {
  test('basic', async () => {
    const postprocessor = colorsPostprocessor()

    const util: UtilObject = {
      selector: '.caret-green-600',
      entries: [
        ['--un-caret-opacity', 1],
        ['caret-color', 'rgba(22,163,74,var(--un-caret-opacity))'],
      ],
      parent: undefined,
      layer: undefined,
      sort: undefined,
      noMerge: undefined,
    }
    postprocessor(util)
    expect(util).toStrictEqual({
      selector: '.caret-green-600',
      entries: [
        ['--un-caret-color', '22,163,74'],
        ['--un-caret-opacity', 1],
        ['caret-color', 'rgba(var(--un-caret-color),var(--un-caret-opacity))'],
      ],
      parent: undefined,
      layer: undefined,
      sort: undefined,
      noMerge: undefined,
    })
  })
})
