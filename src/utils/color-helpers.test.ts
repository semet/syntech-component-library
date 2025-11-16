import { describe, it, expect } from 'vitest'

import {
  hexToRgb,
  rgbToHex,
  rgbToHsl,
  hslToRgb,
  parseColor,
  formatColor,
  type ColorFormat,
} from './color-helpers'

describe('hexToRgb', () => {
  it('should convert valid hex color to RGB', () => {
    expect(hexToRgb('#ff0000')).toEqual([255, 0, 0])
    expect(hexToRgb('#00ff00')).toEqual([0, 255, 0])
    expect(hexToRgb('#0000ff')).toEqual([0, 0, 255])
  })

  it('should handle hex without hash prefix', () => {
    expect(hexToRgb('ff0000')).toEqual([255, 0, 0])
    expect(hexToRgb('00ff00')).toEqual([0, 255, 0])
  })

  it('should handle lowercase hex', () => {
    expect(hexToRgb('#ffffff')).toEqual([255, 255, 255])
    expect(hexToRgb('#abc123')).toEqual([171, 193, 35])
  })

  it('should handle uppercase hex', () => {
    expect(hexToRgb('#FFFFFF')).toEqual([255, 255, 255])
    expect(hexToRgb('#ABC123')).toEqual([171, 193, 35])
  })

  it('should handle mixed case hex', () => {
    expect(hexToRgb('#FfFfFf')).toEqual([255, 255, 255])
  })

  it('should return [0, 0, 0] for invalid hex', () => {
    expect(hexToRgb('#zzz')).toEqual([0, 0, 0])
    expect(hexToRgb('invalid')).toEqual([0, 0, 0])
    expect(hexToRgb('#12')).toEqual([0, 0, 0])
  })

  it('should handle common colors', () => {
    expect(hexToRgb('#000000')).toEqual([0, 0, 0]) // black
    expect(hexToRgb('#ffffff')).toEqual([255, 255, 255]) // white
    expect(hexToRgb('#808080')).toEqual([128, 128, 128]) // gray
  })
})

describe('rgbToHex', () => {
  it('should convert RGB to hex', () => {
    expect(rgbToHex(255, 0, 0)).toBe('#ff0000')
    expect(rgbToHex(0, 255, 0)).toBe('#00ff00')
    expect(rgbToHex(0, 0, 255)).toBe('#0000ff')
  })

  it('should pad single digit hex values', () => {
    expect(rgbToHex(1, 2, 3)).toBe('#010203')
    expect(rgbToHex(10, 11, 12)).toBe('#0a0b0c')
  })

  it('should handle zero values', () => {
    expect(rgbToHex(0, 0, 0)).toBe('#000000')
  })

  it('should handle max values', () => {
    expect(rgbToHex(255, 255, 255)).toBe('#ffffff')
  })

  it('should handle common colors', () => {
    expect(rgbToHex(128, 128, 128)).toBe('#808080') // gray
    expect(rgbToHex(255, 255, 0)).toBe('#ffff00') // yellow
    expect(rgbToHex(255, 0, 255)).toBe('#ff00ff') // magenta
  })

  it('should be reversible with hexToRgb', () => {
    const [r, g, b] = hexToRgb('#3b82f6')
    expect(rgbToHex(r, g, b)).toBe('#3b82f6')
  })
})

describe('rgbToHsl', () => {
  it('should convert RGB to HSL', () => {
    // Red
    expect(rgbToHsl(255, 0, 0)).toEqual([0, 100, 50])
    // Green
    expect(rgbToHsl(0, 255, 0)).toEqual([120, 100, 50])
    // Blue
    expect(rgbToHsl(0, 0, 255)).toEqual([240, 100, 50])
  })

  it('should handle white', () => {
    expect(rgbToHsl(255, 255, 255)).toEqual([0, 0, 100])
  })

  it('should handle black', () => {
    expect(rgbToHsl(0, 0, 0)).toEqual([0, 0, 0])
  })

  it('should handle gray (no saturation)', () => {
    expect(rgbToHsl(128, 128, 128)).toEqual([0, 0, 50])
  })

  it('should handle various colors', () => {
    // Yellow
    expect(rgbToHsl(255, 255, 0)).toEqual([60, 100, 50])
    // Cyan
    expect(rgbToHsl(0, 255, 255)).toEqual([180, 100, 50])
    // Magenta
    expect(rgbToHsl(255, 0, 255)).toEqual([300, 100, 50])
  })

  it('should handle colors with different lightness', () => {
    // Dark red
    expect(rgbToHsl(128, 0, 0)).toEqual([0, 100, 25])
    // Light blue
    const [h, s, l] = rgbToHsl(173, 216, 230)
    expect(h).toBe(195)
    expect(s).toBeGreaterThan(45)
    expect(l).toBeGreaterThan(75)
  })
})

describe('hslToRgb', () => {
  it('should convert HSL to RGB', () => {
    // Red
    expect(hslToRgb(0, 100, 50)).toEqual([255, 0, 0])
    // Green
    expect(hslToRgb(120, 100, 50)).toEqual([0, 255, 0])
    // Blue
    expect(hslToRgb(240, 100, 50)).toEqual([0, 0, 255])
  })

  it('should handle white', () => {
    expect(hslToRgb(0, 0, 100)).toEqual([255, 255, 255])
  })

  it('should handle black', () => {
    expect(hslToRgb(0, 0, 0)).toEqual([0, 0, 0])
  })

  it('should handle gray (no saturation)', () => {
    expect(hslToRgb(0, 0, 50)).toEqual([128, 128, 128])
    expect(hslToRgb(180, 0, 50)).toEqual([128, 128, 128])
  })

  it('should handle various colors', () => {
    // Yellow
    expect(hslToRgb(60, 100, 50)).toEqual([255, 255, 0])
    // Cyan
    expect(hslToRgb(180, 100, 50)).toEqual([0, 255, 255])
    // Magenta
    expect(hslToRgb(300, 100, 50)).toEqual([255, 0, 255])
  })

  it('should be reversible with rgbToHsl', () => {
    const [h, s, l] = rgbToHsl(59, 130, 246)
    const [r, g, b] = hslToRgb(h, s, l)
    // Allow small rounding differences
    expect(Math.abs(r - 59)).toBeLessThan(2)
    expect(Math.abs(g - 130)).toBeLessThan(2)
    expect(Math.abs(b - 246)).toBeLessThan(2)
  })
})

describe('parseColor', () => {
  describe('hex format', () => {
    it('should parse 6-digit hex', () => {
      expect(parseColor('#ff0000')).toEqual({ r: 255, g: 0, b: 0, a: 1 })
      expect(parseColor('#00ff00')).toEqual({ r: 0, g: 255, b: 0, a: 1 })
      expect(parseColor('#0000ff')).toEqual({ r: 0, g: 0, b: 255, a: 1 })
    })

    it('should parse 8-digit hex with alpha', () => {
      expect(parseColor('#ff000080')).toEqual({
        r: 255,
        g: 0,
        b: 0,
        a: 0.501_960_784_313_725_5,
      })
      expect(parseColor('#0000ffff')).toEqual({ r: 0, g: 0, b: 255, a: 1 })
      expect(parseColor('#00ff0000')).toEqual({ r: 0, g: 255, b: 0, a: 0 })
    })

    it('should handle hex without hash', () => {
      expect(parseColor('ff0000')).toEqual({ r: 255, g: 0, b: 0, a: 1 })
    })
  })

  describe('rgb format', () => {
    it('should parse rgb', () => {
      expect(parseColor('rgb(255, 0, 0)')).toEqual({
        r: 255,
        g: 0,
        b: 0,
        a: 1,
      })
      expect(parseColor('rgb(0, 255, 0)')).toEqual({
        r: 0,
        g: 255,
        b: 0,
        a: 1,
      })
    })

    it('should parse rgb without spaces', () => {
      expect(parseColor('rgb(255,0,0)')).toEqual({ r: 255, g: 0, b: 0, a: 1 })
    })
  })

  describe('rgba format', () => {
    it('should parse rgba', () => {
      expect(parseColor('rgba(255, 0, 0, 0.5)')).toEqual({
        r: 255,
        g: 0,
        b: 0,
        a: 0.5,
      })
      expect(parseColor('rgba(0, 255, 0, 1)')).toEqual({
        r: 0,
        g: 255,
        b: 0,
        a: 1,
      })
    })

    it('should parse rgba with decimal alpha', () => {
      expect(parseColor('rgba(100, 150, 200, 0.75)')).toEqual({
        r: 100,
        g: 150,
        b: 200,
        a: 0.75,
      })
    })
  })

  describe('hsl format', () => {
    it('should parse hsl', () => {
      const result = parseColor('hsl(0, 100%, 50%)')
      expect(result.r).toBe(255)
      expect(result.g).toBe(0)
      expect(result.b).toBe(0)
      expect(result.a).toBe(1)
    })

    it('should parse hsl without spaces', () => {
      const result = parseColor('hsl(120,100%,50%)')
      expect(result.r).toBe(0)
      expect(result.g).toBe(255)
      expect(result.b).toBe(0)
    })
  })

  describe('hsla format', () => {
    it('should parse hsla', () => {
      const result = parseColor('hsla(240, 100%, 50%, 0.5)')
      expect(result.r).toBe(0)
      expect(result.g).toBe(0)
      expect(result.b).toBe(255)
      expect(result.a).toBe(0.5)
    })

    it('should parse hsla with full opacity', () => {
      const result = parseColor('hsla(60, 100%, 50%, 1)')
      expect(result.r).toBe(255)
      expect(result.g).toBe(255)
      expect(result.b).toBe(0)
      expect(result.a).toBe(1)
    })
  })

  describe('edge cases', () => {
    it('should return default red for empty string', () => {
      expect(parseColor('')).toEqual({ r: 255, g: 0, b: 0, a: 1 })
    })

    it('should return default red for invalid format', () => {
      expect(parseColor('invalid')).toEqual({ r: 255, g: 0, b: 0, a: 1 })
      expect(parseColor('not-a-color')).toEqual({ r: 255, g: 0, b: 0, a: 1 })
    })

    it('should handle malformed hex', () => {
      expect(parseColor('#ff')).toEqual({ r: 255, g: 0, b: 0, a: 1 })
      expect(parseColor('#fffff')).toEqual({ r: 255, g: 0, b: 0, a: 1 })
    })
  })
})

describe('formatColor', () => {
  describe('hex format', () => {
    it('should format as hex', () => {
      expect(formatColor(255, 0, 0, 1, 'hex')).toBe('#ff0000')
      expect(formatColor(0, 255, 0, 1, 'hex')).toBe('#00ff00')
      expect(formatColor(0, 0, 255, 1, 'hex')).toBe('#0000ff')
    })

    it('should ignore alpha in hex format', () => {
      expect(formatColor(255, 0, 0, 0.5, 'hex')).toBe('#ff0000')
    })
  })

  describe('hexa format', () => {
    it('should format as hexa with alpha', () => {
      expect(formatColor(255, 0, 0, 1, 'hexa')).toBe('#ff0000ff')
      expect(formatColor(255, 0, 0, 0, 'hexa')).toBe('#ff000000')
    })

    it('should handle fractional alpha', () => {
      const result = formatColor(255, 0, 0, 0.5, 'hexa')
      expect(result).toBe('#ff000080')
    })

    it('should pad alpha values', () => {
      const result = formatColor(255, 0, 0, 0.01, 'hexa')
      expect(result.length).toBe(9) // # + 6 hex + 2 alpha
    })
  })

  describe('rgb format', () => {
    it('should format as rgb', () => {
      expect(formatColor(255, 0, 0, 1, 'rgb')).toBe('rgb(255, 0, 0)')
      expect(formatColor(0, 255, 0, 1, 'rgb')).toBe('rgb(0, 255, 0)')
    })

    it('should ignore alpha in rgb format', () => {
      expect(formatColor(255, 0, 0, 0.5, 'rgb')).toBe('rgb(255, 0, 0)')
    })
  })

  describe('rgba format', () => {
    it('should format as rgba', () => {
      expect(formatColor(255, 0, 0, 1, 'rgba')).toBe('rgba(255, 0, 0, 1.00)')
      expect(formatColor(0, 255, 0, 0.5, 'rgba')).toBe('rgba(0, 255, 0, 0.50)')
    })

    it('should format alpha with 2 decimal places', () => {
      expect(formatColor(100, 150, 200, 0.123, 'rgba')).toBe(
        'rgba(100, 150, 200, 0.12)',
      )
      expect(formatColor(100, 150, 200, 0.999, 'rgba')).toBe(
        'rgba(100, 150, 200, 1.00)',
      )
    })
  })

  describe('hsl format', () => {
    it('should format as hsl', () => {
      expect(formatColor(255, 0, 0, 1, 'hsl')).toBe('hsl(0, 100%, 50%)')
      expect(formatColor(0, 255, 0, 1, 'hsl')).toBe('hsl(120, 100%, 50%)')
      expect(formatColor(0, 0, 255, 1, 'hsl')).toBe('hsl(240, 100%, 50%)')
    })

    it('should ignore alpha in hsl format', () => {
      expect(formatColor(255, 0, 0, 0.5, 'hsl')).toBe('hsl(0, 100%, 50%)')
    })

    it('should handle gray colors', () => {
      expect(formatColor(128, 128, 128, 1, 'hsl')).toBe('hsl(0, 0%, 50%)')
    })
  })

  describe('hsla format', () => {
    it('should format as hsla', () => {
      expect(formatColor(255, 0, 0, 1, 'hsla')).toBe('hsla(0, 100%, 50%, 1.00)')
      expect(formatColor(0, 255, 0, 0.5, 'hsla')).toBe(
        'hsla(120, 100%, 50%, 0.50)',
      )
    })

    it('should format alpha with 2 decimal places', () => {
      expect(formatColor(255, 0, 0, 0.123, 'hsla')).toBe(
        'hsla(0, 100%, 50%, 0.12)',
      )
    })
  })

  describe('default format', () => {
    it('should default to hex for unknown format', () => {
      expect(formatColor(255, 0, 0, 1, 'unknown' as ColorFormat)).toBe(
        '#ff0000',
      )
    })
  })

  describe('edge cases', () => {
    it('should handle zero values', () => {
      expect(formatColor(0, 0, 0, 1, 'hex')).toBe('#000000')
      expect(formatColor(0, 0, 0, 1, 'rgb')).toBe('rgb(0, 0, 0)')
      expect(formatColor(0, 0, 0, 1, 'hsl')).toBe('hsl(0, 0%, 0%)')
    })

    it('should handle max values', () => {
      expect(formatColor(255, 255, 255, 1, 'hex')).toBe('#ffffff')
      expect(formatColor(255, 255, 255, 1, 'rgb')).toBe('rgb(255, 255, 255)')
      expect(formatColor(255, 255, 255, 1, 'hsl')).toBe('hsl(0, 0%, 100%)')
    })

    it('should handle zero alpha', () => {
      expect(formatColor(255, 0, 0, 0, 'rgba')).toBe('rgba(255, 0, 0, 0.00)')
      expect(formatColor(255, 0, 0, 0, 'hexa')).toBe('#ff000000')
      expect(formatColor(255, 0, 0, 0, 'hsla')).toBe('hsla(0, 100%, 50%, 0.00)')
    })
  })
})

describe('color conversion round-trip', () => {
  it('should maintain color through hex -> rgb -> hex', () => {
    const original = '#3b82f6'
    const [r, g, b] = hexToRgb(original)
    const result = rgbToHex(r, g, b)
    expect(result).toBe(original)
  })

  it('should maintain color through rgb -> hsl -> rgb', () => {
    const original = { r: 59, g: 130, b: 246 }
    const [h, s, l] = rgbToHsl(original.r, original.g, original.b)
    const [r, g, b] = hslToRgb(h, s, l)
    // Allow small rounding differences
    expect(Math.abs(r - original.r)).toBeLessThan(2)
    expect(Math.abs(g - original.g)).toBeLessThan(2)
    expect(Math.abs(b - original.b)).toBeLessThan(2)
  })

  it('should maintain color through parse -> format', () => {
    const colors = [
      '#ff0000',
      'rgb(0, 255, 0)',
      'rgba(0, 0, 255, 0.5)',
      'hsl(120, 100%, 50%)',
      'hsla(240, 100%, 50%, 0.75)',
    ]

    for (const color of colors) {
      const parsed = parseColor(color)

      if (color.startsWith('#')) {
        const formatted = formatColor(
          parsed.r,
          parsed.g,
          parsed.b,
          parsed.a,
          'hex',
        )
        expect(formatted).toBe(color.toLowerCase())
      } else if (color.startsWith('rgb(')) {
        const formatted = formatColor(
          parsed.r,
          parsed.g,
          parsed.b,
          parsed.a,
          'rgb',
        )
        expect(formatted).toBe(color)
      } else if (color.startsWith('rgba(')) {
        const formatted = formatColor(
          parsed.r,
          parsed.g,
          parsed.b,
          parsed.a,
          'rgba',
        )
        // Compare without the alpha formatting
        expect(formatted.split(',').slice(0, 3).join(',')).toBe(
          color.split(',').slice(0, 3).join(','),
        )
      }
    }
  })

  it('should handle all formats consistently', () => {
    const testColor = { r: 59, g: 130, b: 246, a: 0.5 }

    const hex = formatColor(
      testColor.r,
      testColor.g,
      testColor.b,
      testColor.a,
      'hex',
    )
    expect(hex).toMatch(/^#[0-9a-f]{6}$/)

    const hexa = formatColor(
      testColor.r,
      testColor.g,
      testColor.b,
      testColor.a,
      'hexa',
    )
    expect(hexa).toMatch(/^#[0-9a-f]{8}$/)

    const rgb = formatColor(
      testColor.r,
      testColor.g,
      testColor.b,
      testColor.a,
      'rgb',
    )
    expect(rgb).toMatch(/^rgb\(\d+, \d+, \d+\)$/)

    const rgba = formatColor(
      testColor.r,
      testColor.g,
      testColor.b,
      testColor.a,
      'rgba',
    )
    expect(rgba).toMatch(/^rgba\(\d+, \d+, \d+, \d\.\d{2}\)$/)

    const hsl = formatColor(
      testColor.r,
      testColor.g,
      testColor.b,
      testColor.a,
      'hsl',
    )
    expect(hsl).toMatch(/^hsl\(\d+, \d+%, \d+%\)$/)

    const hsla = formatColor(
      testColor.r,
      testColor.g,
      testColor.b,
      testColor.a,
      'hsla',
    )
    expect(hsla).toMatch(/^hsla\(\d+, \d+%, \d+%, \d\.\d{2}\)$/)
  })
})
