import { useMemo, useCallback } from 'react'

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

const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
] as const

export const MONTH_NAMES_SHORT = [
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
] as const

const DAY_NAMES = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
] as const

const DAY_NAMES_SHORT = [
  'Sun',
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat',
] as const

export const dateUtils = {
  getDaysInMonth: (date: Date): number => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  },

  getStartOfMonth: (date: Date): number => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  },

  isSameDay: (date1: Date, date2: Date): boolean => {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    )
  },

  isBefore: (date1: Date, date2: Date): boolean => {
    const d1 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate())
    const d2 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate())
    return d1 < d2
  },

  isAfter: (date1: Date, date2: Date): boolean => {
    const d1 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate())
    const d2 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate())
    return d1 > d2
  },

  addMonths: (date: Date, months: number): Date => {
    const result = new Date(date)
    result.setMonth(result.getMonth() + months)
    return result
  },

  addYears: (date: Date, years: number): Date => {
    const result = new Date(date)
    result.setFullYear(result.getFullYear() + years)
    return result
  },

  setDate: (date: Date, day: number): Date => {
    const result = new Date(date)
    result.setDate(day)
    return result
  },

  setMonth: (date: Date, month: number): Date => {
    const result = new Date(date)
    result.setMonth(month)
    return result
  },

  getMonthName: (date: Date): string => {
    return MONTH_NAMES[date.getMonth()]
  },

  pad: (num: number): string => num.toString().padStart(2, '0'),
}

export function useDateHelpers() {
  const isSameDay = useCallback((date1: Date, date2: Date): boolean => {
    return dateUtils.isSameDay(date1, date2)
  }, [])

  const isBefore = useCallback((date1: Date, date2: Date): boolean => {
    return dateUtils.isBefore(date1, date2)
  }, [])

  const isAfter = useCallback((date1: Date, date2: Date): boolean => {
    return dateUtils.isAfter(date1, date2)
  }, [])

  const addMonths = useCallback((date: Date, months: number): Date => {
    return dateUtils.addMonths(date, months)
  }, [])

  const addYears = useCallback((date: Date, years: number): Date => {
    return dateUtils.addYears(date, years)
  }, [])

  const setDate = useCallback((date: Date, day: number): Date => {
    return dateUtils.setDate(date, day)
  }, [])

  const setMonth = useCallback((date: Date, month: number): Date => {
    return dateUtils.setMonth(date, month)
  }, [])

  const formatDate = useCallback((date: Date, format: DateFormat): string => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDate()
    const dayOfWeek = date.getDay()

    const formats: Record<DateFormat, string> = {
      'YYYY-MM-DD': `${year}-${dateUtils.pad(month + 1)}-${dateUtils.pad(day)}`,
      'MM/DD/YYYY': `${dateUtils.pad(month + 1)}/${dateUtils.pad(day)}/${year}`,
      'DD/MM/YYYY': `${dateUtils.pad(day)}/${dateUtils.pad(month + 1)}/${year}`,
      'YYYY/MM/DD': `${year}/${dateUtils.pad(month + 1)}/${dateUtils.pad(day)}`,
      'MMM DD, YYYY': `${MONTH_NAMES_SHORT[month]} ${dateUtils.pad(day)}, ${year}`,
      'MMMM DD, YYYY': `${MONTH_NAMES[month]} ${dateUtils.pad(day)}, ${year}`,
      'DD MMM YYYY': `${dateUtils.pad(day)} ${MONTH_NAMES_SHORT[month]} ${year}`,
      'DD MMMM YYYY': `${dateUtils.pad(day)} ${MONTH_NAMES[month]} ${year}`,
      'ddd, MMM DD, YYYY': `${DAY_NAMES_SHORT[dayOfWeek]}, ${MONTH_NAMES_SHORT[month]} ${dateUtils.pad(day)}, ${year}`,
      'dddd, MMMM DD, YYYY': `${DAY_NAMES[dayOfWeek]}, ${MONTH_NAMES[month]} ${dateUtils.pad(day)}, ${year}`,
      'MM-DD-YYYY': `${dateUtils.pad(month + 1)}-${dateUtils.pad(day)}-${year}`,
      'DD-MM-YYYY': `${dateUtils.pad(day)}-${dateUtils.pad(month + 1)}-${year}`,
      'YYYY.MM.DD': `${year}.${dateUtils.pad(month + 1)}.${dateUtils.pad(day)}`,
      'DD.MM.YYYY': `${dateUtils.pad(day)}.${dateUtils.pad(month + 1)}.${year}`,
    }

    return formats[format]
  }, [])

  const getDaysInMonth = useCallback((date: Date): number => {
    return dateUtils.getDaysInMonth(date)
  }, [])

  const getStartOfMonth = useCallback((date: Date): number => {
    return dateUtils.getStartOfMonth(date)
  }, [])

  const getMonthName = useCallback((date: Date): string => {
    return dateUtils.getMonthName(date)
  }, [])

  return {
    isSameDay,
    isBefore,
    isAfter,
    addMonths,
    addYears,
    setDate,
    setMonth,
    formatDate,
    getDaysInMonth,
    getStartOfMonth,
    getMonthName,
  }
}

export function useDateOperations(currentDate?: Date) {
  const helpers = useDateHelpers()

  const calendarData = useMemo(() => {
    if (!currentDate) return null

    return {
      daysInMonth: helpers.getDaysInMonth(currentDate),
      startingDayOfWeek: helpers.getStartOfMonth(currentDate),
      monthName: helpers.getMonthName(currentDate),
      year: currentDate.getFullYear(),
    }
  }, [currentDate, helpers])

  const isDateDisabled = useCallback(
    (date: Date, minDate?: Date | null, maxDate?: Date | null): boolean => {
      if (minDate && helpers.isBefore(date, minDate)) return true
      if (maxDate && helpers.isAfter(date, maxDate)) return true
      return false
    },
    [helpers],
  )

  const isToday = useCallback(
    (date: Date): boolean => {
      return helpers.isSameDay(date, new Date())
    },
    [helpers],
  )

  return {
    ...helpers,
    calendarData,
    isDateDisabled,
    isToday,
  }
}

export const dateHelpers = dateUtils
