import {
  useCallback,
  useId,
  useMemo,
  useRef,
  useState,
  type ComponentProps,
} from 'react'
import { BiCalendar, BiChevronLeft, BiChevronRight, BiX } from 'react-icons/bi'
import { twMerge } from 'tailwind-merge'
import type { VariantProps } from 'tailwind-variants'
import { useOnClickOutside } from 'usehooks-ts'

import {
  MONTH_NAMES_SHORT,
  useDateOperations,
  type DateFormat,
} from '@/utils/date-helpers'

import { datePickerStyles } from './styles'

type DatePickerStylesProps = VariantProps<typeof datePickerStyles>

const DAY_NAMES = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

/**
 * Custom class names for DatePicker component styling.
 * Allows granular control over the appearance of different parts of the date picker.
 *
 * @example
 * ```tsx
 * const customClassNames: DatePickerClassNames = {
 *   wrapper: 'my-custom-wrapper',
 *   input: 'border-blue-500',
 *   calendar: 'shadow-2xl',
 * }
 * ```
 */
export interface DatePickerClassNames {
  wrapper?: string
  labelWrapper?: string
  label?: string
  asterisk?: string
  description?: string
  inputWrapper?: string
  input?: string
  calendarIcon?: string
  rightSection?: string
  clearButton?: string
  errorWrapper?: string
  error?: string
  calendar?: string
  calendarHeader?: string
  calendarButton?: string
  calendarTitle?: string
  dayNamesGrid?: string
  dayName?: string
  daysGrid?: string
  dayButton?: string
}

/**
 * Props for the DatePicker component.
 *
 * @example
 * ```tsx
 * // Basic usage
 * <DatePicker
 *   value={selectedDate}
 *   onChange={setSelectedDate}
 *   placeholder="Pick a date"
 * />
 *
 * // With constraints
 * <DatePicker
 *   value={date}
 *   onChange={setDate}
 *   minDate={new Date(2024, 0, 1)}
 *   maxDate={new Date(2024, 11, 31)}
 *   clearable
 * />
 *
 * // With custom styling
 * <DatePicker
 *   label="Select Date"
 *   description="Choose your preferred date"
 *   withAsterisk
 *   variant="filled"
 *   size="md"
 *   radius="lg"
 * />
 * ```
 */
export interface DatePickerProps
  extends Omit<ComponentProps<'input'>, 'size' | 'value' | 'onChange'> {
  /**
   * Label text displayed above the input field.
   * @example "Birth Date"
   */
  label?: string

  /**
   * Helper text displayed below the label.
   * @example "Select your date of birth"
   */
  description?: string

  /**
   * Shows a red asterisk (*) next to the label to indicate required field.
   * @default false
   */
  withAsterisk?: boolean

  /**
   * Error message displayed below the input field.
   * When set, the input border changes to red.
   * @example "Date is required"
   */
  error?: string

  /**
   * Visual style variant of the input field.
   * - `default`: Standard border style
   * - `filled`: Filled background style
   * - `unstyled`: No default styling
   * @default "default"
   */
  variant?: DatePickerStylesProps['variant']

  /**
   * Size of the input field.
   * Controls height and padding of the input.
   * @default "sm"
   */
  size?: DatePickerStylesProps['size']

  /**
   * Border radius of the input field.
   * @default "sm"
   */
  radius?: DatePickerStylesProps['radius']

  /**
   * Custom class names for styling different parts of the component.
   * @see DatePickerClassNames
   */
  classNames?: DatePickerClassNames

  /**
   * Currently selected date.
   * Pass `null` for no selection.
   * @example new Date(2024, 0, 15) // January 15, 2024
   */
  value?: Date | null

  /**
   * Callback fired when the date changes.
   * Receives the new date or `null` if cleared.
   * @param date - The newly selected date or null
   */
  onChange?: (date: Date | null) => void

  /**
   * Placeholder text shown when no date is selected.
   * @default "Select a date"
   */
  placeholder?: string

  /**
   * Format for displaying the selected date.
   * @see DateFormat for available formats
   * @default "YYYY-MM-DD"
   * @example "MM/DD/YYYY" // 01/15/2024
   * @example "MMMM DD, YYYY" // January 15, 2024
   */
  format?: DateFormat

  /**
   * Minimum selectable date.
   * Dates before this will be disabled.
   * @example new Date(2024, 0, 1) // January 1, 2024
   */
  minDate?: Date | null

  /**
   * Maximum selectable date.
   * Dates after this will be disabled.
   * @example new Date(2024, 11, 31) // December 31, 2024
   */
  maxDate?: Date | null

  /**
   * Custom React element to replace the default calendar icon.
   * @example <FiCalendar />
   */
  calendarIcon?: React.ReactNode

  /**
   * Position of the calendar icon.
   * - `left`: Icon appears on the left side
   * - `right`: Icon appears on the right side
   * @default "right"
   */
  iconPosition?: 'left' | 'right'

  /**
   * Enables the clear button to remove the selected date.
   * When enabled, an X button appears next to the calendar icon.
   * @default false
   */
  clearable?: boolean
}

/**
 * A fully-featured date picker component with calendar popup.
 *
 * Features:
 * - Calendar dropdown with month/year navigation
 * - Date range constraints (min/max dates)
 * - Multiple date format options
 * - Clearable selection
 * - Keyboard accessible
 * - Fully customizable styling
 * - Built with native Date objects (no external date libraries)
 *
 * @component
 * @example
 * ```tsx
 * import { useState } from 'react'
 * import DatePicker from '@/components/DatePicker'
 *
 * function MyForm() {
 *   const [date, setDate] = useState<Date | null>(null)
 *
 *   return (
 *     <DatePicker
 *       label="Appointment Date"
 *       description="Select your preferred appointment date"
 *       value={date}
 *       onChange={setDate}
 *       withAsterisk
 *       clearable
 *       minDate={new Date()}
 *       format="MMMM DD, YYYY"
 *     />
 *   )
 * }
 * ```
 *
 * @example
 * ```tsx
 * // Date range with constraints
 * <DatePicker
 *   label="Start Date"
 *   value={startDate}
 *   onChange={setStartDate}
 *   maxDate={endDate || undefined}
 * />
 *
 * <DatePicker
 *   label="End Date"
 *   value={endDate}
 *   onChange={setEndDate}
 *   minDate={startDate || undefined}
 * />
 * ```
 *
 * @example
 * ```tsx
 * // Custom styling
 * <DatePicker
 *   variant="filled"
 *   size="lg"
 *   radius="xl"
 *   iconPosition="left"
 *   classNames={{
 *     input: 'bg-blue-50',
 *     calendar: 'shadow-2xl border-blue-200',
 *   }}
 * />
 * ```
 */
export default function DatePicker({
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
  value,
  onChange,
  placeholder = 'Select a date',
  format = 'YYYY-MM-DD',
  minDate = null,
  maxDate = null,
  calendarIcon,
  iconPosition = 'right',
  clearable = false,
  ...props
}: DatePickerProps) {
  const id = useId()
  const datePickerRef = useRef<HTMLDivElement>(null!)
  const [selectedDate, setSelectedDate] = useState<Date | null>(value || null)
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [isOpen, setIsOpen] = useState(false)
  const [view, setView] = useState<'days' | 'months'>('days')

  const {
    calendarData,
    isDateDisabled: isDateDisabledHelper,
    isToday: isTodayHelper,
    isSameDay,
    addMonths,
    addYears,
    setDate,
    setMonth,
    formatDate: formatDateHelper,
    getDaysInMonth,
    getMonthName,
    isBefore,
    isAfter,
  } = useDateOperations(currentMonth)

  const handleClickOutside = () => {
    setIsOpen(false)
  }

  useOnClickOutside(datePickerRef, handleClickOutside)

  const styles = datePickerStyles({
    variant,
    size,
    radius,
    hasError: !!error,
    disabled,
    iconPosition,
    hasClearButton: clearable && !!selectedDate,
  })

  const adjustedCalendarData = useMemo(() => {
    if (!calendarData) return { daysInMonth: 0, adjustedStartDay: 0 }
    const adjustedStartDay =
      calendarData.startingDayOfWeek === 0
        ? 6
        : calendarData.startingDayOfWeek - 1
    return {
      daysInMonth: calendarData.daysInMonth,
      adjustedStartDay,
    }
  }, [calendarData])

  const canGoToPreviousMonth = useMemo(() => {
    if (!minDate) return true
    const previousMonth = addMonths(currentMonth, -1)
    const lastDayOfPrevMonth = new Date(
      previousMonth.getFullYear(),
      previousMonth.getMonth() + 1,
      0,
    )
    return (
      isAfter(lastDayOfPrevMonth, minDate) ||
      isSameDay(lastDayOfPrevMonth, minDate)
    )
  }, [currentMonth, minDate, addMonths, isAfter, isSameDay])

  const canGoToNextMonth = useMemo(() => {
    if (!maxDate) return true
    const nextMonth = addMonths(currentMonth, 1)
    const firstDayOfNextMonth = new Date(
      nextMonth.getFullYear(),
      nextMonth.getMonth(),
      1,
    )
    return (
      isBefore(firstDayOfNextMonth, maxDate) ||
      isSameDay(firstDayOfNextMonth, maxDate)
    )
  }, [currentMonth, maxDate, addMonths, isBefore, isSameDay])

  const canGoToPreviousYear = useMemo(() => {
    if (!minDate) return true
    const previousYear = addYears(currentMonth, -1)
    const lastDayOfPrevYear = new Date(previousYear.getFullYear(), 11, 31)
    return (
      isAfter(lastDayOfPrevYear, minDate) ||
      isSameDay(lastDayOfPrevYear, minDate)
    )
  }, [currentMonth, minDate, addYears, isAfter, isSameDay])

  const canGoToNextYear = useMemo(() => {
    if (!maxDate) return true
    const nextYear = addYears(currentMonth, 1)
    const firstDayOfNextYear = new Date(nextYear.getFullYear(), 0, 1)
    return (
      isBefore(firstDayOfNextYear, maxDate) ||
      isSameDay(firstDayOfNextYear, maxDate)
    )
  }, [currentMonth, maxDate, addYears, isBefore, isSameDay])

  const goToPreviousMonth = useCallback(() => {
    if (canGoToPreviousMonth) {
      setCurrentMonth((prev) => addMonths(prev, -1))
    }
  }, [canGoToPreviousMonth, addMonths])

  const goToNextMonth = useCallback(() => {
    if (canGoToNextMonth) {
      setCurrentMonth((prev) => addMonths(prev, 1))
    }
  }, [canGoToNextMonth, addMonths])

  const goToPreviousYear = useCallback(() => {
    if (canGoToPreviousYear) {
      setCurrentMonth((prev) => addYears(prev, -1))
    }
  }, [canGoToPreviousYear, addYears])

  const goToNextYear = useCallback(() => {
    if (canGoToNextYear) {
      setCurrentMonth((prev) => addYears(prev, 1))
    }
  }, [canGoToNextYear, addYears])

  const toggleView = useCallback(() => {
    setView((prev) => (prev === 'days' ? 'months' : 'days'))
  }, [])

  const isDateDisabled = useCallback(
    (date: Date) => {
      return isDateDisabledHelper(date, minDate, maxDate)
    },
    [minDate, maxDate, isDateDisabledHelper],
  )

  const selectDate = useCallback(
    (day: number) => {
      const selected = setDate(currentMonth, day)
      if (isDateDisabled(selected)) return

      setSelectedDate(selected)
      onChange?.(selected)
      setIsOpen(false)
    },
    [currentMonth, onChange, isDateDisabled, setDate],
  )

  const selectMonthHandler = useCallback(
    (monthIndex: number) => {
      setCurrentMonth((prev) => setMonth(prev, monthIndex))
      setView('days')
    },
    [setMonth],
  )

  const isToday = useCallback(
    (day: number) => {
      const checkDate = setDate(currentMonth, day)
      return isTodayHelper(checkDate)
    },
    [currentMonth, setDate, isTodayHelper],
  )

  const isSelected = useCallback(
    (day: number) => {
      if (!selectedDate) return false
      const checkDate = setDate(currentMonth, day)
      return isSameDay(checkDate, selectedDate)
    },
    [currentMonth, selectedDate, setDate, isSameDay],
  )

  const formatDate = useCallback(
    (date: Date | null) => {
      if (!date) return ''
      return formatDateHelper(date, format)
    },
    [format, formatDateHelper],
  )

  const handlePrevMonthDayClick = useCallback(
    (day: number) => {
      const prevMonth = addMonths(currentMonth, -1)
      const selected = setDate(prevMonth, day)
      if (isDateDisabled(selected)) return

      setSelectedDate(selected)
      onChange?.(selected)
      setCurrentMonth(prevMonth)
    },
    [currentMonth, onChange, isDateDisabled, addMonths, setDate],
  )

  const handleNextMonthDayClick = useCallback(
    (day: number) => {
      const nextMonth = addMonths(currentMonth, 1)
      const selected = setDate(nextMonth, day)
      if (isDateDisabled(selected)) return

      setSelectedDate(selected)
      onChange?.(selected)
      setCurrentMonth(nextMonth)
    },
    [currentMonth, onChange, isDateDisabled, addMonths, setDate],
  )

  const renderCalendarDays = useMemo(() => {
    const days = []
    const prevMonth = addMonths(currentMonth, -1)
    const prevMonthDays = getDaysInMonth(prevMonth)
    const { daysInMonth, adjustedStartDay } = adjustedCalendarData

    for (let i = adjustedStartDay - 1; i >= 0; i--) {
      const day = prevMonthDays - i
      const date = setDate(prevMonth, day)
      const disabled = isDateDisabled(date)

      days.push(
        <button
          key={`prev-${day}`}
          onClick={() => handlePrevMonthDayClick(day)}
          type="button"
          disabled={disabled}
          className={twMerge([
            styles.dayButton(),
            styles.dayButtonOutside(),
            disabled && 'cursor-not-allowed opacity-30',
            classNames?.dayButton,
          ])}
        >
          {day}
        </button>,
      )
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const date = setDate(currentMonth, day)
      const isCurrentDay = isToday(day)
      const isSelectedDay = isSelected(day)
      const disabled = isDateDisabled(date)

      const buttonClass = isSelectedDay
        ? styles.dayButtonSelected()
        : isCurrentDay
          ? styles.dayButtonToday()
          : styles.dayButtonDefault()

      days.push(
        <button
          key={day}
          onClick={() => selectDate(day)}
          type="button"
          disabled={disabled}
          className={twMerge([
            styles.dayButton(),
            buttonClass,
            disabled && 'cursor-not-allowed opacity-30 hover:bg-transparent',
            classNames?.dayButton,
          ])}
        >
          {day}
        </button>,
      )
    }

    const totalCells = days.length
    const remainingCells = totalCells % 7 === 0 ? 0 : 7 - (totalCells % 7)

    for (let day = 1; day <= remainingCells; day++) {
      const nextMonth = addMonths(currentMonth, 1)
      const date = setDate(nextMonth, day)
      const disabled = isDateDisabled(date)

      days.push(
        <button
          key={`next-${day}`}
          onClick={() => handleNextMonthDayClick(day)}
          type="button"
          disabled={disabled}
          className={twMerge([
            styles.dayButton(),
            styles.dayButtonOutside(),
            disabled && 'cursor-not-allowed opacity-30',
            classNames?.dayButton,
          ])}
        >
          {day}
        </button>,
      )
    }

    return days
  }, [
    currentMonth,
    adjustedCalendarData,
    isToday,
    isSelected,
    selectDate,
    handlePrevMonthDayClick,
    handleNextMonthDayClick,
    isDateDisabled,
    styles,
    classNames,
    addMonths,
    getDaysInMonth,
    setDate,
  ])

  const renderMonths = useMemo(() => {
    return MONTH_NAMES_SHORT.map((month, index) => {
      const today = new Date()
      const isCurrentMonth =
        index === today.getMonth() &&
        currentMonth.getFullYear() === today.getFullYear()
      const isSelectedMonth =
        selectedDate &&
        index === selectedDate.getMonth() &&
        currentMonth.getFullYear() === selectedDate.getFullYear()

      const buttonClass = isSelectedMonth
        ? styles.dayButtonSelected()
        : isCurrentMonth
          ? styles.dayButtonToday()
          : styles.dayButtonDefault()

      return (
        <button
          key={month}
          onClick={() => selectMonthHandler(index)}
          type="button"
          className={twMerge([
            styles.dayButton(),
            buttonClass,
            classNames?.dayButton,
          ])}
        >
          {month}
        </button>
      )
    })
  }, [currentMonth, selectedDate, selectMonthHandler, styles, classNames])

  const handleInputClick = useCallback(() => {
    if (!disabled) {
      setIsOpen((prev) => !prev)
      setView('days')
    }
  }, [disabled])

  const handleClear = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation()
      setSelectedDate(null)
      onChange?.(null)
    },
    [onChange],
  )

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
        ref={datePickerRef}
      >
        {iconPosition === 'left' && (
          <div
            className={twMerge([
              'pointer-events-none absolute top-1/2 left-2.5 flex -translate-y-1/2 items-center justify-center text-gray-500',
              classNames?.rightSection,
            ])}
          >
            {calendarIcon || (
              <BiCalendar
                className={twMerge([
                  styles.calendarIcon(),
                  classNames?.calendarIcon,
                ])}
              />
            )}
          </div>
        )}

        <input
          id={id}
          disabled={disabled}
          readOnly
          value={formatDate(selectedDate)}
          placeholder={placeholder}
          onClick={handleInputClick}
          className={twMerge([styles.input(), className, classNames?.input])}
          aria-invalid={!!error}
          {...props}
        />

        {clearable && selectedDate && !disabled && (
          <button
            type="button"
            onClick={handleClear}
            className={twMerge([styles.clearButton(), classNames?.clearButton])}
          >
            <BiX className="size-full" />
          </button>
        )}

        {iconPosition === 'right' && (
          <div
            className={twMerge([
              styles.rightSection(),
              classNames?.rightSection,
            ])}
          >
            {calendarIcon || (
              <BiCalendar
                className={twMerge([
                  styles.calendarIcon(),
                  classNames?.calendarIcon,
                ])}
              />
            )}
          </div>
        )}

        {isOpen && (
          <div className={twMerge([styles.calendar(), classNames?.calendar])}>
            <div
              className={twMerge([
                styles.calendarHeader(),
                classNames?.calendarHeader,
              ])}
            >
              <button
                onClick={view === 'days' ? goToPreviousMonth : goToPreviousYear}
                type="button"
                disabled={
                  view === 'days' ? !canGoToPreviousMonth : !canGoToPreviousYear
                }
                className={twMerge([
                  styles.calendarButton(),
                  classNames?.calendarButton,
                  (view === 'days'
                    ? !canGoToPreviousMonth
                    : !canGoToPreviousYear) && 'cursor-not-allowed opacity-30',
                ])}
              >
                <BiChevronLeft className="size-5 text-gray-600" />
              </button>

              <button
                onClick={toggleView}
                type="button"
                className={twMerge([
                  styles.calendarTitle(),
                  classNames?.calendarTitle,
                  'cursor-pointer rounded-md px-3 py-1 transition-colors hover:bg-gray-100',
                ])}
              >
                {view === 'days'
                  ? `${getMonthName(currentMonth)} ${currentMonth.getFullYear()}`
                  : currentMonth.getFullYear()}
              </button>

              <button
                onClick={view === 'days' ? goToNextMonth : goToNextYear}
                type="button"
                disabled={
                  view === 'days' ? !canGoToNextMonth : !canGoToNextYear
                }
                className={twMerge([
                  styles.calendarButton(),
                  classNames?.calendarButton,
                  (view === 'days' ? !canGoToNextMonth : !canGoToNextYear) &&
                    'cursor-not-allowed opacity-30',
                ])}
              >
                <BiChevronRight className="size-5 text-gray-600" />
              </button>
            </div>

            {view === 'days' ? (
              <>
                <div
                  className={twMerge([
                    styles.dayNamesGrid(),
                    classNames?.dayNamesGrid,
                  ])}
                >
                  {DAY_NAMES.map((day) => (
                    <div
                      key={day}
                      className={twMerge([
                        styles.dayName(),
                        classNames?.dayName,
                      ])}
                    >
                      {day}
                    </div>
                  ))}
                </div>

                <div
                  className={twMerge([styles.daysGrid(), classNames?.daysGrid])}
                >
                  {renderCalendarDays}
                </div>
              </>
            ) : (
              <div className="mt-2 grid grid-cols-3 gap-2">{renderMonths}</div>
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
