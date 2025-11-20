import {
  useCallback,
  useId,
  useMemo,
  useRef,
  useState,
  useEffect,
  type ComponentProps,
  useEffectEvent,
  startTransition,
} from 'react'
import { BiX } from 'react-icons/bi'
import { twMerge } from 'tailwind-merge'
import type { VariantProps } from 'tailwind-variants'

import {
  formatColor,
  hslToRgb,
  parseColor,
  rgbToHex,
  rgbToHsl,
  type ColorFormat,
} from '@/utils/color-helpers'

import { colorPickerStyles } from './styles'

type ColorPickerStylesProps = VariantProps<typeof colorPickerStyles>

interface ColorPickerClassNames {
  wrapper?: string
  labelWrapper?: string
  label?: string
  asterisk?: string
  description?: string
  inputWrapper?: string
  input?: string
  leftSection?: string
  rightSection?: string
  clearButton?: string
  errorWrapper?: string
  error?: string
  picker?: string
  colorArea?: string
  hueSlider?: string
  alphaSlider?: string
  swatchesGrid?: string
  swatch?: string
  colorSwatch?: string
}

export interface ColorPickerProps
  extends Omit<ComponentProps<'input'>, 'size' | 'value' | 'onChange'> {
  label?: string
  description?: string
  withAsterisk?: boolean
  error?: string
  variant?: ColorPickerStylesProps['variant']
  size?: ColorPickerStylesProps['size']
  radius?: ColorPickerStylesProps['radius']
  classNames?: ColorPickerClassNames
  value?: string
  onChange?: (color: string) => void
  placeholder?: string
  format?: ColorFormat
  swatches?: string[]
  swatchesPerRow?: number
  withPicker?: boolean
  clearable?: boolean
  disallowInput?: boolean
}

export default function ColorPicker({
  label,
  description,
  withAsterisk = false,
  error,
  variant = 'default',
  size = 'sm',
  radius = 'sm',
  disabled = false,
  className,
  classNames,
  value = '#ff2424',
  onChange,
  placeholder = 'Pick a color',
  format = 'hex',
  swatches,
  swatchesPerRow = 7,
  withPicker = true,
  clearable = false,
  disallowInput = false,
  ...props
}: ColorPickerProps) {
  const id = useId()
  const pickerRef = useRef<HTMLDivElement>(null)
  const colorAreaRef = useRef<HTMLDivElement>(null)
  const hueSliderRef = useRef<HTMLDivElement>(null)
  const alphaSliderRef = useRef<HTMLDivElement>(null)

  const [isOpen, setIsOpen] = useState(false)
  const [inputValue, setInputValue] = useState(value || '')
  const [isDraggingColor, setIsDraggingColor] = useState(false)
  const [isDraggingHue, setIsDraggingHue] = useState(false)
  const [isDraggingAlpha, setIsDraggingAlpha] = useState(false)

  const color = useMemo(() => parseColor(value || ''), [value])
  const [hue, setHue] = useState(0)
  const [saturation, setSaturation] = useState(100)
  const [lightness, setLightness] = useState(50)
  const [alpha, setAlpha] = useState(color.a)

  const onColorChange = useEffectEvent(() => {
    const [h, s, l] = rgbToHsl(color.r, color.g, color.b)
    setHue(h)
    setSaturation(s)
    setLightness(l)
    setAlpha(color.a)
  })

  useEffect(() => {
    onColorChange()
  }, [])

  useEffect(() => {
    startTransition(() => {
      setInputValue(value || '')
    })
  }, [value])

  const styles = colorPickerStyles({
    variant,
    size,
    radius,
    hasError: !!error,
    disabled,
    hasClearButton: clearable && !!inputValue,
  })

  const handleClickOutside = useCallback((e: MouseEvent) => {
    if (pickerRef.current && !pickerRef.current.contains(e.target as Node)) {
      setIsOpen(false)
    }
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, handleClickOutside])

  const updateColor = useCallback(
    (
      newSaturation: number,
      newLightness: number,
      newHue: number,
      newAlpha: number,
    ) => {
      const [r, g, b] = hslToRgb(newHue, newSaturation, newLightness)
      const formatted = formatColor(r, g, b, newAlpha, format)
      setInputValue(formatted)
      onChange?.(formatted)
    },
    [format, onChange],
  )

  const handleColorAreaMove = useCallback(
    (e: MouseEvent | React.MouseEvent) => {
      if (!colorAreaRef.current) return

      const rect = colorAreaRef.current.getBoundingClientRect()
      const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width))
      const y = Math.max(0, Math.min(e.clientY - rect.top, rect.height))

      const newSaturation = (x / rect.width) * 100
      const newLightness = 100 - (y / rect.height) * 100

      setSaturation(newSaturation)
      setLightness(newLightness)
      updateColor(newSaturation, newLightness, hue, alpha)
    },
    [hue, alpha, updateColor],
  )

  const handleHueMove = useCallback(
    (e: MouseEvent | React.MouseEvent) => {
      if (!hueSliderRef.current) return

      const rect = hueSliderRef.current.getBoundingClientRect()
      const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width))
      const newHue = (x / rect.width) * 360

      setHue(newHue)
      updateColor(saturation, lightness, newHue, alpha)
    },
    [saturation, lightness, alpha, updateColor],
  )

  const handleAlphaMove = useCallback(
    (e: MouseEvent | React.MouseEvent) => {
      if (!alphaSliderRef.current) return

      const rect = alphaSliderRef.current.getBoundingClientRect()
      const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width))
      const newAlpha = x / rect.width

      setAlpha(newAlpha)
      updateColor(saturation, lightness, hue, newAlpha)
    },
    [saturation, lightness, hue, updateColor],
  )

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDraggingColor) handleColorAreaMove(e)
      if (isDraggingHue) handleHueMove(e)
      if (isDraggingAlpha) handleAlphaMove(e)
    }

    const handleMouseUp = () => {
      setIsDraggingColor(false)
      setIsDraggingHue(false)
      setIsDraggingAlpha(false)
    }

    if (isDraggingColor || isDraggingHue || isDraggingAlpha) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)
      }
    }
  }, [
    isDraggingColor,
    isDraggingHue,
    isDraggingAlpha,
    handleColorAreaMove,
    handleHueMove,
    handleAlphaMove,
  ])

  const handleInputClick = useCallback(() => {
    if (!disabled && withPicker) {
      setIsOpen((prev) => !prev)
    }
  }, [disabled, withPicker])

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value
      setInputValue(newValue)
      onChange?.(newValue)
    },
    [onChange],
  )

  const handleSwatchClick = useCallback(
    (swatchColor: string) => {
      setInputValue(swatchColor)
      onChange?.(swatchColor)
      setIsOpen(false)
    },
    [onChange],
  )

  const handleClear = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation()
      setInputValue('')
      onChange?.('')
    },
    [onChange],
  )

  const currentColor = useMemo(() => {
    if (!inputValue && !value) {
      return '#f3f4f6'
    }
    const [r, g, b] = hslToRgb(hue, saturation, lightness)
    return `rgba(${r}, ${g}, ${b}, ${alpha})`
  }, [hue, saturation, lightness, alpha, inputValue, value])

  const hasAlpha = format === 'rgba' || format === 'hsla' || format === 'hexa'

  return (
    <div className={twMerge([styles.wrapper(), classNames?.wrapper])}>
      {label && (
        <div
          className={twMerge([styles.labelWrapper(), classNames?.labelWrapper])}
        >
          <label
            className={twMerge([styles.label(), classNames?.label])}
            htmlFor={id}
          >
            {label}
            {withAsterisk && (
              <span
                className={twMerge([styles.asterisk(), classNames?.asterisk])}
              >
                *
              </span>
            )}
          </label>
        </div>
      )}

      {description && (
        <div
          className={twMerge([styles.description(), classNames?.description])}
        >
          {description}
        </div>
      )}

      <div
        className={twMerge([styles.inputWrapper(), classNames?.inputWrapper])}
        ref={pickerRef}
      >
        <div
          className={twMerge([styles.leftSection(), classNames?.leftSection])}
          onClick={handleInputClick}
        >
          <div
            className={twMerge([styles.colorSwatch(), classNames?.colorSwatch])}
            style={{
              backgroundColor: inputValue || currentColor,
              ...(!inputValue &&
                !value && {
                  border: '1px solid #e5e7eb',
                }),
            }}
          />
        </div>

        <input
          id={id}
          disabled={disabled}
          readOnly={disallowInput}
          value={inputValue}
          placeholder={placeholder}
          onClick={handleInputClick}
          onChange={handleInputChange}
          className={twMerge([styles.input(), className, classNames?.input])}
          aria-invalid={!!error}
          {...props}
        />

        {clearable && inputValue && !disabled && (
          <button
            type="button"
            onClick={handleClear}
            className={twMerge([styles.clearButton(), classNames?.clearButton])}
          >
            <BiX className="size-full" />
          </button>
        )}

        {isOpen && withPicker && (
          <div className={twMerge([styles.picker(), classNames?.picker])}>
            {/* Color Area */}
            <div
              ref={colorAreaRef}
              className={twMerge([styles.colorArea(), classNames?.colorArea])}
              style={{
                backgroundColor: `hsl(${hue}, 100%, 50%)`,
              }}
              onMouseDown={(e) => {
                setIsDraggingColor(true)
                handleColorAreaMove(e)
              }}
            >
              <div
                className={styles.colorAreaOverlay()}
                style={{
                  background: 'linear-gradient(to right, white, transparent)',
                }}
              />
              <div
                className={styles.colorAreaOverlay()}
                style={{
                  background: 'linear-gradient(to bottom, transparent, black)',
                }}
              />
              <div
                className={styles.colorAreaThumb()}
                style={{
                  left: `${saturation}%`,
                  top: `${100 - lightness}%`,
                  backgroundColor: currentColor,
                }}
              />
            </div>

            {/* Hue Slider */}
            <div
              ref={hueSliderRef}
              className={twMerge([styles.hueSlider(), classNames?.hueSlider])}
              style={{
                background:
                  'linear-gradient(to right, #ff0000 0%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%)',
              }}
              onMouseDown={(e) => {
                setIsDraggingHue(true)
                handleHueMove(e)
              }}
            >
              <div
                className={styles.hueThumb()}
                style={{
                  left: `${(hue / 360) * 100}%`,
                  backgroundColor: `hsl(${hue}, 100%, 50%)`,
                }}
              />
            </div>

            {/* Alpha Slider */}
            {hasAlpha && (
              <div
                ref={alphaSliderRef}
                className={twMerge([
                  styles.alphaSlider(),
                  classNames?.alphaSlider,
                ])}
                style={{
                  backgroundImage: `
        linear-gradient(to right, transparent, ${rgbToHex(...hslToRgb(hue, saturation, lightness))}),
        linear-gradient(45deg, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%, #ddd),
        linear-gradient(45deg, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%, #ddd)
      `,
                  backgroundSize: '100% 100%, 8px 8px, 8px 8px',
                  backgroundPosition: '0 0, 0 0, 4px 4px',
                }}
                onMouseDown={(e) => {
                  setIsDraggingAlpha(true)
                  handleAlphaMove(e)
                }}
              >
                <div
                  className={styles.alphaThumb()}
                  style={{
                    left: `${alpha * 100}%`,
                    backgroundColor: currentColor,
                  }}
                />
              </div>
            )}

            {/* Swatches */}
            {swatches && swatches.length > 0 && (
              <div
                className={twMerge([
                  styles.swatchesGrid(),
                  classNames?.swatchesGrid,
                ])}
                style={{
                  gridTemplateColumns: `repeat(${swatchesPerRow}, minmax(0, 1fr))`,
                }}
              >
                {swatches.map((swatch, index) => (
                  <button
                    key={index}
                    type="button"
                    className={twMerge([
                      styles.swatch(),
                      inputValue === swatch && styles.swatchSelected(),
                      classNames?.swatch,
                    ])}
                    style={{ backgroundColor: swatch }}
                    onClick={() => handleSwatchClick(swatch)}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {error && (
          <div
            className={twMerge([
              styles.errorWrapper(),
              classNames?.errorWrapper,
            ])}
          >
            <div className={twMerge([styles.error(), classNames?.error])}>
              {error}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
