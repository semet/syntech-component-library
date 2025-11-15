import type { Dayjs } from 'dayjs'
import dayjs from 'dayjs'
import {
  useCallback,
  useId,
  useMemo,
  useRef,
  useState,
  type ComponentProps,
} from 'react'
import { BiCalendar, BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import { twMerge } from 'tailwind-merge'
import type { VariantProps } from 'tailwind-variants'
import { useOnClickOutside } from 'usehooks-ts'

import { datePickerStyles } from './styles'

type DatePickerStylesProps = VariantProps<typeof datePickerStyles>

export interface DatePickerClassNames {
  wrapper?: string
  labelWrapper?: string
  label?: string
  asterisk?: string
  description?: string
  inputWrapper?: string
  input?: string
  rightSection?: string
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

export type DateFormat =
  | 'YYYY-MM-DD'
  | 'MM/DD/YYYY'
  | 'DD/MM/YYYY'
  | 'YYYY/MM/DD'
  | 'MMM DD, YYYY'
  | 'MMMM DD, YYYY'
  | 'DD MMM YYYY'
  | 'DD MMMM YYYY'
  | 'ddd, MMM DD, YYYY'
  | 'dddd, MMMM DD, YYYY'
  | 'MM-DD-YYYY'
  | 'DD-MM-YYYY'
  | 'YYYY.MM.DD'
  | 'DD.MM.YYYY'

export interface DatePickerProps
  extends Omit<ComponentProps<'input'>, 'size' | 'value' | 'onChange'> {
  label?: string
  description?: string
  withAsterisk?: boolean
  error?: string
  variant?: DatePickerStylesProps['variant']
  size?: DatePickerStylesProps['size']
  radius?: DatePickerStylesProps['radius']
  classNames?: DatePickerClassNames
  value?: Dayjs | null
  onChange?: (date: Dayjs | null) => void
  placeholder?: string
  format?: DateFormat
  minDate?: Dayjs | null
  maxDate?: Dayjs | null
  calendarIcon?: React.ReactNode
  iconPosition?: 'left' | 'right'
}

export default function DatePicker({
  label,
  description,
  withAsterisk = false,
  error,
  variant = 'default',
  size = 'sm',
  radius = 'md',
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
  ...props
}: DatePickerProps) {
  const id = useId()
  const datePickerRef = useRef<HTMLDivElement>(null!)
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(value || null)
  const [currentMonth, setCurrentMonth] = useState(dayjs())
  const [isOpen, setIsOpen] = useState(false)
  const [view, setView] = useState<'days' | 'months'>('days')

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
  })

  const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  const monthNames = useMemo(
    () => [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    [],
  )

  const calendarData = useMemo(() => {
    const daysInMonth = currentMonth.daysInMonth()
    const startingDayOfWeek = currentMonth.startOf('month').day()
    const adjustedStartDay = startingDayOfWeek === 0 ? 6 : startingDayOfWeek - 1
    return { daysInMonth, adjustedStartDay }
  }, [currentMonth])

  // Check if we can navigate to previous month
  const canGoToPreviousMonth = useMemo(() => {
    if (!minDate) return true
    const previousMonth = currentMonth.subtract(1, 'month').endOf('month')
    return (
      previousMonth.isAfter(minDate) || previousMonth.isSame(minDate, 'day')
    )
  }, [currentMonth, minDate])

  // Check if we can navigate to next month
  const canGoToNextMonth = useMemo(() => {
    if (!maxDate) return true
    const nextMonth = currentMonth.add(1, 'month').startOf('month')
    return nextMonth.isBefore(maxDate) || nextMonth.isSame(maxDate, 'day')
  }, [currentMonth, maxDate])

  // Check if we can navigate to previous year
  const canGoToPreviousYear = useMemo(() => {
    if (!minDate) return true
    const previousYear = currentMonth.subtract(1, 'year').endOf('year')
    return previousYear.isAfter(minDate) || previousYear.isSame(minDate, 'day')
  }, [currentMonth, minDate])

  // Check if we can navigate to next year
  const canGoToNextYear = useMemo(() => {
    if (!maxDate) return true
    const nextYear = currentMonth.add(1, 'year').startOf('year')
    return nextYear.isBefore(maxDate) || nextYear.isSame(maxDate, 'day')
  }, [currentMonth, maxDate])

  const goToPreviousMonth = useCallback(() => {
    if (canGoToPreviousMonth) {
      setCurrentMonth((prev) => prev.subtract(1, 'month'))
    }
  }, [canGoToPreviousMonth])

  const goToNextMonth = useCallback(() => {
    if (canGoToNextMonth) {
      setCurrentMonth((prev) => prev.add(1, 'month'))
    }
  }, [canGoToNextMonth])

  const goToPreviousYear = useCallback(() => {
    if (canGoToPreviousYear) {
      setCurrentMonth((prev) => prev.subtract(1, 'year'))
    }
  }, [canGoToPreviousYear])

  const goToNextYear = useCallback(() => {
    if (canGoToNextYear) {
      setCurrentMonth((prev) => prev.add(1, 'year'))
    }
  }, [canGoToNextYear])

  const toggleView = useCallback(() => {
    setView((prev) => (prev === 'days' ? 'months' : 'days'))
  }, [])

  // Check if a date is disabled
  const isDateDisabled = useCallback(
    (date: Dayjs) => {
      if (minDate && date.isBefore(minDate, 'day')) return true
      if (maxDate && date.isAfter(maxDate, 'day')) return true
      return false
    },
    [minDate, maxDate],
  )

  const selectDate = useCallback(
    (day: number) => {
      const selected = currentMonth.date(day)
      if (isDateDisabled(selected)) return

      setSelectedDate(selected)
      onChange?.(selected)
      setIsOpen(false)
    },
    [currentMonth, onChange, isDateDisabled],
  )

  const selectMonth = useCallback((monthIndex: number) => {
    setCurrentMonth((prev) => prev.month(monthIndex))
    setView('days')
  }, [])

  const isToday = useCallback(
    (day: number) => {
      const today = dayjs()
      const checkDate = currentMonth.date(day)
      return checkDate.isSame(today, 'day')
    },
    [currentMonth],
  )

  const isSelected = useCallback(
    (day: number) => {
      if (!selectedDate) return false
      const checkDate = currentMonth.date(day)
      return checkDate.isSame(selectedDate, 'day')
    },
    [currentMonth, selectedDate],
  )

  const formatDate = useCallback(
    (date: Dayjs | null) => {
      if (!date) return ''
      return date.format(format)
    },
    [format],
  )

  const handlePrevMonthDayClick = useCallback(
    (day: number) => {
      const prevMonth = currentMonth.subtract(1, 'month')
      const selected = prevMonth.date(day)
      if (isDateDisabled(selected)) return

      setSelectedDate(selected)
      onChange?.(selected)
      setCurrentMonth(prevMonth)
    },
    [currentMonth, onChange, isDateDisabled],
  )

  const handleNextMonthDayClick = useCallback(
    (day: number) => {
      const nextMonth = currentMonth.add(1, 'month')
      const selected = nextMonth.date(day)
      if (isDateDisabled(selected)) return

      setSelectedDate(selected)
      onChange?.(selected)
      setCurrentMonth(nextMonth)
    },
    [currentMonth, onChange, isDateDisabled],
  )

  const renderCalendarDays = useMemo(() => {
    const days = []
    const prevMonthDays = currentMonth.subtract(1, 'month').daysInMonth()
    const { daysInMonth, adjustedStartDay } = calendarData

    // Previous month's trailing days
    for (let i = adjustedStartDay - 1; i >= 0; i--) {
      const day = prevMonthDays - i
      const date = currentMonth.subtract(1, 'month').date(day)
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

    // Current month days
    for (let day = 1; day <= daysInMonth; day++) {
      const date = currentMonth.date(day)
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

    // Next month's leading days to fill the grid
    const totalCells = days.length
    const remainingCells = totalCells % 7 === 0 ? 0 : 7 - (totalCells % 7)

    for (let day = 1; day <= remainingCells; day++) {
      const date = currentMonth.add(1, 'month').date(day)
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
    calendarData,
    isToday,
    isSelected,
    selectDate,
    handlePrevMonthDayClick,
    handleNextMonthDayClick,
    isDateDisabled,
    styles,
    classNames,
  ])

  const renderMonths = useMemo(() => {
    return monthNames.map((month, index) => {
      const isCurrentMonth =
        index === dayjs().month() && currentMonth.year() === dayjs().year()
      const isSelectedMonth =
        selectedDate &&
        index === selectedDate.month() &&
        currentMonth.year() === selectedDate.year()

      const buttonClass = isSelectedMonth
        ? styles.dayButtonSelected()
        : isCurrentMonth
          ? styles.dayButtonToday()
          : styles.dayButtonDefault()

      return (
        <button
          key={month}
          onClick={() => selectMonth(index)}
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
  }, [monthNames, currentMonth, selectedDate, selectMonth, styles, classNames])

  const handleInputClick = useCallback(() => {
    if (!disabled) {
      setIsOpen((prev) => !prev)
      setView('days')
    }
  }, [disabled])

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
            {calendarIcon || <BiCalendar className="size-5" />}
          </div>
        )}

        <input
          id={id}
          disabled={disabled}
          readOnly
          value={formatDate(selectedDate)}
          placeholder={placeholder}
          onClick={handleInputClick}
          className={twMerge([
            styles.input(),
            iconPosition === 'left' && 'pl-10',
            className,
            classNames?.input,
          ])}
          aria-invalid={!!error}
          {...props}
        />

        {iconPosition === 'right' && (
          <div
            className={twMerge([
              styles.rightSection(),
              classNames?.rightSection,
            ])}
          >
            {calendarIcon || <BiCalendar className="size-5" />}
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
                  ? currentMonth.format('MMMM YYYY')
                  : currentMonth.format('YYYY')}
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
                  {dayNames.map((day) => (
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
