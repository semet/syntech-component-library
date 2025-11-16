export type ColorFormat = 'hex' | 'hexa' | 'rgb' | 'rgba' | 'hsl' | 'hsla'

export function hexToRgb(hex: string): [number, number, number] {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? [
        Number.parseInt(result[1], 16),
        Number.parseInt(result[2], 16),
        Number.parseInt(result[3], 16),
      ]
    : [0, 0, 0]
}

export function rgbToHex(r: number, g: number, b: number): string {
  return '#' + [r, g, b].map((x) => x.toString(16).padStart(2, '0')).join('')
}

export function rgbToHsl(
  r: number,
  g: number,
  b: number,
): [number, number, number] {
  r /= 255
  g /= 255
  b /= 255
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  let h = 0
  let s = 0
  const l = (max + min) / 2

  if (max !== min) {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case r: {
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6
        break
      }
      case g: {
        h = ((b - r) / d + 2) / 6
        break
      }
      case b: {
        h = ((r - g) / d + 4) / 6
        break
      }
    }
  }

  return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)]
}

export function hslToRgb(
  h: number,
  s: number,
  l: number,
): [number, number, number] {
  h /= 360
  s /= 100
  l /= 100

  let r, g, b

  if (s === 0) {
    r = g = b = l
  } else {
    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1
      if (t > 1) t -= 1
      if (t < 1 / 6) return p + (q - p) * 6 * t
      if (t < 1 / 2) return q
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
      return p
    }

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s
    const p = 2 * l - q
    r = hue2rgb(p, q, h + 1 / 3)
    g = hue2rgb(p, q, h)
    b = hue2rgb(p, q, h - 1 / 3)
  }

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)]
}

export function parseColor(color: string): {
  r: number
  g: number
  b: number
  a: number
} {
  if (!color) return { r: 255, g: 0, b: 0, a: 1 }

  // Hex format
  if (color.startsWith('#')) {
    const hex = color.slice(1)
    if (hex.length === 6) {
      const [r, g, b] = hexToRgb(color)
      return { r, g, b, a: 1 }
    } else if (hex.length === 8) {
      const [r, g, b] = hexToRgb('#' + hex.slice(0, 6))
      const a = Number.parseInt(hex.slice(6, 8), 16) / 255
      return { r, g, b, a }
    }
  }

  // RGB/RGBA format
  if (color.startsWith('rgb')) {
    const match = color.match(/[\d.]+/g)
    if (match) {
      return {
        r: Number.parseInt(match[0]),
        g: Number.parseInt(match[1]),
        b: Number.parseInt(match[2]),
        a: match[3] ? Number.parseFloat(match[3]) : 1,
      }
    }
  }

  // HSL/HSLA format
  if (color.startsWith('hsl')) {
    const match = color.match(/[\d.]+/g)
    if (match) {
      const [r, g, b] = hslToRgb(
        Number.parseInt(match[0]),
        Number.parseInt(match[1]),
        Number.parseInt(match[2]),
      )
      return { r, g, b, a: match[3] ? Number.parseFloat(match[3]) : 1 }
    }
  }

  return { r: 255, g: 0, b: 0, a: 1 }
}

export function formatColor(
  r: number,
  g: number,
  b: number,
  a: number,
  format: ColorFormat,
): string {
  switch (format) {
    case 'hex': {
      return rgbToHex(r, g, b)
    }
    case 'hexa': {
      return (
        rgbToHex(r, g, b) +
        Math.round(a * 255)
          .toString(16)
          .padStart(2, '0')
      )
    }
    case 'rgb': {
      return `rgb(${r}, ${g}, ${b})`
    }
    case 'rgba': {
      return `rgba(${r}, ${g}, ${b}, ${a.toFixed(2)})`
    }
    case 'hsl': {
      const [h, s, l] = rgbToHsl(r, g, b)
      return `hsl(${h}, ${s}%, ${l}%)`
    }
    case 'hsla': {
      const [h, s, l] = rgbToHsl(r, g, b)
      return `hsla(${h}, ${s}%, ${l}%, ${a.toFixed(2)})`
    }
    default: {
      return rgbToHex(r, g, b)
    }
  }
}
