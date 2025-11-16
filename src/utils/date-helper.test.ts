import { renderHook } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

import { dateUtils, useDateHelpers, useDateOperations } from './date-helper'

describe('dateUtils', () => {
  describe('getDaysInMonth', () => {
    it('should return correct number of days for January', () => {
      const date = new Date(2024, 0, 15) // January 2024
      expect(dateUtils.getDaysInMonth(date)).toBe(31)
    })

    it('should return correct number of days for February (non-leap year)', () => {
      const date = new Date(2023, 1, 15) // February 2023
      expect(dateUtils.getDaysInMonth(date)).toBe(28)
    })

    it('should return correct number of days for February (leap year)', () => {
      const date = new Date(2024, 1, 15) // February 2024
      expect(dateUtils.getDaysInMonth(date)).toBe(29)
    })

    it('should return correct number of days for April', () => {
      const date = new Date(2024, 3, 15) // April 2024
      expect(dateUtils.getDaysInMonth(date)).toBe(30)
    })
  })

  describe('getStartOfMonth', () => {
    it('should return correct day of week for start of month', () => {
      const date = new Date(2024, 0, 1) // January 1, 2024 (Monday)
      expect(dateUtils.getStartOfMonth(date)).toBe(1) // Monday = 1
    })

    it('should return 0 for Sunday start', () => {
      const date = new Date(2024, 8, 1) // September 1, 2024 (Sunday)
      expect(dateUtils.getStartOfMonth(date)).toBe(0) // Sunday = 0
    })

    it('should return 6 for Saturday start', () => {
      const date = new Date(2024, 5, 1) // June 1, 2024 (Saturday)
      expect(dateUtils.getStartOfMonth(date)).toBe(6) // Saturday = 6
    })
  })

  describe('isSameDay', () => {
    it('should return true for same day', () => {
      const date1 = new Date(2024, 0, 15, 10, 30)
      const date2 = new Date(2024, 0, 15, 14, 45)
      expect(dateUtils.isSameDay(date1, date2)).toBe(true)
    })

    it('should return false for different days', () => {
      const date1 = new Date(2024, 0, 15)
      const date2 = new Date(2024, 0, 16)
      expect(dateUtils.isSameDay(date1, date2)).toBe(false)
    })

    it('should return false for same day different months', () => {
      const date1 = new Date(2024, 0, 15)
      const date2 = new Date(2024, 1, 15)
      expect(dateUtils.isSameDay(date1, date2)).toBe(false)
    })

    it('should return false for same day different years', () => {
      const date1 = new Date(2024, 0, 15)
      const date2 = new Date(2023, 0, 15)
      expect(dateUtils.isSameDay(date1, date2)).toBe(false)
    })
  })

  describe('isBefore', () => {
    it('should return true when date1 is before date2', () => {
      const date1 = new Date(2024, 0, 15)
      const date2 = new Date(2024, 0, 16)
      expect(dateUtils.isBefore(date1, date2)).toBe(true)
    })

    it('should return false when date1 is after date2', () => {
      const date1 = new Date(2024, 0, 16)
      const date2 = new Date(2024, 0, 15)
      expect(dateUtils.isBefore(date1, date2)).toBe(false)
    })

    it('should return false when dates are the same', () => {
      const date1 = new Date(2024, 0, 15, 10, 30)
      const date2 = new Date(2024, 0, 15, 14, 45)
      expect(dateUtils.isBefore(date1, date2)).toBe(false)
    })

    it('should compare across months correctly', () => {
      const date1 = new Date(2024, 0, 31)
      const date2 = new Date(2024, 1, 1)
      expect(dateUtils.isBefore(date1, date2)).toBe(true)
    })

    it('should compare across years correctly', () => {
      const date1 = new Date(2023, 11, 31)
      const date2 = new Date(2024, 0, 1)
      expect(dateUtils.isBefore(date1, date2)).toBe(true)
    })
  })

  describe('isAfter', () => {
    it('should return true when date1 is after date2', () => {
      const date1 = new Date(2024, 0, 16)
      const date2 = new Date(2024, 0, 15)
      expect(dateUtils.isAfter(date1, date2)).toBe(true)
    })

    it('should return false when date1 is before date2', () => {
      const date1 = new Date(2024, 0, 15)
      const date2 = new Date(2024, 0, 16)
      expect(dateUtils.isAfter(date1, date2)).toBe(false)
    })

    it('should return false when dates are the same', () => {
      const date1 = new Date(2024, 0, 15, 10, 30)
      const date2 = new Date(2024, 0, 15, 14, 45)
      expect(dateUtils.isAfter(date1, date2)).toBe(false)
    })

    it('should compare across months correctly', () => {
      const date1 = new Date(2024, 1, 1)
      const date2 = new Date(2024, 0, 31)
      expect(dateUtils.isAfter(date1, date2)).toBe(true)
    })

    it('should compare across years correctly', () => {
      const date1 = new Date(2024, 0, 1)
      const date2 = new Date(2023, 11, 31)
      expect(dateUtils.isAfter(date1, date2)).toBe(true)
    })
  })

  describe('addMonths', () => {
    it('should add months correctly', () => {
      const date = new Date(2024, 0, 15)
      const result = dateUtils.addMonths(date, 3)
      expect(result.getMonth()).toBe(3) // April
      expect(result.getFullYear()).toBe(2024)
    })

    it('should handle year rollover when adding months', () => {
      const date = new Date(2024, 10, 15) // November
      const result = dateUtils.addMonths(date, 3)
      expect(result.getMonth()).toBe(1) // February
      expect(result.getFullYear()).toBe(2025)
    })

    it('should subtract months with negative value', () => {
      const date = new Date(2024, 3, 15) // April
      const result = dateUtils.addMonths(date, -2)
      expect(result.getMonth()).toBe(1) // February
      expect(result.getFullYear()).toBe(2024)
    })

    it('should handle year rollback when subtracting months', () => {
      const date = new Date(2024, 1, 15) // February
      const result = dateUtils.addMonths(date, -3)
      expect(result.getMonth()).toBe(10) // November
      expect(result.getFullYear()).toBe(2023)
    })

    it('should not mutate original date', () => {
      const date = new Date(2024, 0, 15)
      const originalMonth = date.getMonth()
      dateUtils.addMonths(date, 3)
      expect(date.getMonth()).toBe(originalMonth)
    })
  })

  describe('addYears', () => {
    it('should add years correctly', () => {
      const date = new Date(2024, 0, 15)
      const result = dateUtils.addYears(date, 5)
      expect(result.getFullYear()).toBe(2029)
    })

    it('should subtract years with negative value', () => {
      const date = new Date(2024, 0, 15)
      const result = dateUtils.addYears(date, -5)
      expect(result.getFullYear()).toBe(2019)
    })

    it('should preserve month and day', () => {
      const date = new Date(2024, 5, 15)
      const result = dateUtils.addYears(date, 2)
      expect(result.getMonth()).toBe(5)
      expect(result.getDate()).toBe(15)
    })

    it('should not mutate original date', () => {
      const date = new Date(2024, 0, 15)
      const originalYear = date.getFullYear()
      dateUtils.addYears(date, 5)
      expect(date.getFullYear()).toBe(originalYear)
    })
  })

  describe('setDate', () => {
    it('should set date correctly', () => {
      const date = new Date(2024, 0, 15)
      const result = dateUtils.setDate(date, 25)
      expect(result.getDate()).toBe(25)
      expect(result.getMonth()).toBe(0)
      expect(result.getFullYear()).toBe(2024)
    })

    it('should handle date overflow to next month', () => {
      const date = new Date(2024, 1, 15) // February 2024 (29 days)
      const result = dateUtils.setDate(date, 30)
      expect(result.getMonth()).toBe(2) // March
      expect(result.getDate()).toBe(1)
    })

    it('should not mutate original date', () => {
      const date = new Date(2024, 0, 15)
      const originalDate = date.getDate()
      dateUtils.setDate(date, 25)
      expect(date.getDate()).toBe(originalDate)
    })
  })

  describe('setMonth', () => {
    it('should set month correctly', () => {
      const date = new Date(2024, 0, 15)
      const result = dateUtils.setMonth(date, 5)
      expect(result.getMonth()).toBe(5) // June
      expect(result.getDate()).toBe(15)
      expect(result.getFullYear()).toBe(2024)
    })

    it('should handle month overflow to next year', () => {
      const date = new Date(2024, 0, 15)
      const result = dateUtils.setMonth(date, 13)
      expect(result.getMonth()).toBe(1) // February
      expect(result.getFullYear()).toBe(2025)
    })

    it('should not mutate original date', () => {
      const date = new Date(2024, 0, 15)
      const originalMonth = date.getMonth()
      dateUtils.setMonth(date, 5)
      expect(date.getMonth()).toBe(originalMonth)
    })
  })

  describe('getMonthName', () => {
    it('should return correct month name for January', () => {
      const date = new Date(2024, 0, 15)
      expect(dateUtils.getMonthName(date)).toBe('January')
    })

    it('should return correct month name for December', () => {
      const date = new Date(2024, 11, 15)
      expect(dateUtils.getMonthName(date)).toBe('December')
    })

    it('should return correct month name for June', () => {
      const date = new Date(2024, 5, 15)
      expect(dateUtils.getMonthName(date)).toBe('June')
    })
  })

  describe('pad', () => {
    it('should pad single digit numbers', () => {
      expect(dateUtils.pad(5)).toBe('05')
    })

    it('should not pad double digit numbers', () => {
      expect(dateUtils.pad(15)).toBe('15')
    })

    it('should handle zero', () => {
      expect(dateUtils.pad(0)).toBe('00')
    })
  })
})

describe('useDateHelpers', () => {
  it('should return all helper functions', () => {
    const { result } = renderHook(() => useDateHelpers())

    expect(result.current).toHaveProperty('isSameDay')
    expect(result.current).toHaveProperty('isBefore')
    expect(result.current).toHaveProperty('isAfter')
    expect(result.current).toHaveProperty('addMonths')
    expect(result.current).toHaveProperty('addYears')
    expect(result.current).toHaveProperty('setDate')
    expect(result.current).toHaveProperty('setMonth')
    expect(result.current).toHaveProperty('formatDate')
    expect(result.current).toHaveProperty('getDaysInMonth')
    expect(result.current).toHaveProperty('getStartOfMonth')
    expect(result.current).toHaveProperty('getMonthName')
  })

  describe('formatDate', () => {
    const testDate = new Date(2024, 0, 15) // January 15, 2024 (Monday)

    it('should format as YYYY-MM-DD', () => {
      const { result } = renderHook(() => useDateHelpers())
      expect(result.current.formatDate(testDate, 'YYYY-MM-DD')).toBe(
        '2024-01-15',
      )
    })

    it('should format as MM/DD/YYYY', () => {
      const { result } = renderHook(() => useDateHelpers())
      expect(result.current.formatDate(testDate, 'MM/DD/YYYY')).toBe(
        '01/15/2024',
      )
    })

    it('should format as DD/MM/YYYY', () => {
      const { result } = renderHook(() => useDateHelpers())
      expect(result.current.formatDate(testDate, 'DD/MM/YYYY')).toBe(
        '15/01/2024',
      )
    })

    it('should format as YYYY/MM/DD', () => {
      const { result } = renderHook(() => useDateHelpers())
      expect(result.current.formatDate(testDate, 'YYYY/MM/DD')).toBe(
        '2024/01/15',
      )
    })

    it('should format as MMM DD, YYYY', () => {
      const { result } = renderHook(() => useDateHelpers())
      expect(result.current.formatDate(testDate, 'MMM DD, YYYY')).toBe(
        'Jan 15, 2024',
      )
    })

    it('should format as MMMM DD, YYYY', () => {
      const { result } = renderHook(() => useDateHelpers())
      expect(result.current.formatDate(testDate, 'MMMM DD, YYYY')).toBe(
        'January 15, 2024',
      )
    })

    it('should format as DD MMM YYYY', () => {
      const { result } = renderHook(() => useDateHelpers())
      expect(result.current.formatDate(testDate, 'DD MMM YYYY')).toBe(
        '15 Jan 2024',
      )
    })

    it('should format as DD MMMM YYYY', () => {
      const { result } = renderHook(() => useDateHelpers())
      expect(result.current.formatDate(testDate, 'DD MMMM YYYY')).toBe(
        '15 January 2024',
      )
    })

    it('should format as ddd, MMM DD, YYYY', () => {
      const { result } = renderHook(() => useDateHelpers())
      expect(result.current.formatDate(testDate, 'ddd, MMM DD, YYYY')).toBe(
        'Mon, Jan 15, 2024',
      )
    })

    it('should format as dddd, MMMM DD, YYYY', () => {
      const { result } = renderHook(() => useDateHelpers())
      expect(result.current.formatDate(testDate, 'dddd, MMMM DD, YYYY')).toBe(
        'Monday, January 15, 2024',
      )
    })

    it('should format as MM-DD-YYYY', () => {
      const { result } = renderHook(() => useDateHelpers())
      expect(result.current.formatDate(testDate, 'MM-DD-YYYY')).toBe(
        '01-15-2024',
      )
    })

    it('should format as DD-MM-YYYY', () => {
      const { result } = renderHook(() => useDateHelpers())
      expect(result.current.formatDate(testDate, 'DD-MM-YYYY')).toBe(
        '15-01-2024',
      )
    })

    it('should format as YYYY.MM.DD', () => {
      const { result } = renderHook(() => useDateHelpers())
      expect(result.current.formatDate(testDate, 'YYYY.MM.DD')).toBe(
        '2024.01.15',
      )
    })

    it('should format as DD.MM.YYYY', () => {
      const { result } = renderHook(() => useDateHelpers())
      expect(result.current.formatDate(testDate, 'DD.MM.YYYY')).toBe(
        '15.01.2024',
      )
    })
  })

  it('should maintain stable references across re-renders', () => {
    const { result, rerender } = renderHook(() => useDateHelpers())
    const firstResult = result.current

    rerender()

    expect(result.current.isSameDay).toBe(firstResult.isSameDay)
    expect(result.current.formatDate).toBe(firstResult.formatDate)
    expect(result.current.addMonths).toBe(firstResult.addMonths)
  })
})

describe('useDateOperations', () => {
  const testDate = new Date(2024, 0, 15) // January 15, 2024

  it('should return all helper functions and additional operations', () => {
    const { result } = renderHook(() => useDateOperations(testDate))

    expect(result.current).toHaveProperty('calendarData')
    expect(result.current).toHaveProperty('isDateDisabled')
    expect(result.current).toHaveProperty('isToday')
    expect(result.current).toHaveProperty('isSameDay')
    expect(result.current).toHaveProperty('formatDate')
  })

  describe('calendarData', () => {
    it('should compute calendar data correctly', () => {
      const { result } = renderHook(() => useDateOperations(testDate))

      expect(result.current.calendarData).toEqual({
        daysInMonth: 31,
        startingDayOfWeek: 1, // Monday
        monthName: 'January',
        year: 2024,
      })
    })

    it('should return null when no date provided', () => {
      const { result } = renderHook(() => useDateOperations())

      expect(result.current.calendarData).toBeNull()
    })

    it('should update when date changes', () => {
      const { result, rerender } = renderHook(
        ({ date }) => useDateOperations(date),
        { initialProps: { date: testDate } },
      )

      expect(result.current.calendarData?.monthName).toBe('January')

      const newDate = new Date(2024, 5, 15) // June 2024
      rerender({ date: newDate })

      expect(result.current.calendarData?.monthName).toBe('June')
      expect(result.current.calendarData?.daysInMonth).toBe(30)
    })
  })

  describe('isDateDisabled', () => {
    it('should return false when no constraints', () => {
      const { result } = renderHook(() => useDateOperations(testDate))
      const checkDate = new Date(2024, 0, 20)

      expect(result.current.isDateDisabled(checkDate)).toBe(false)
    })

    it('should return true when date is before minDate', () => {
      const { result } = renderHook(() => useDateOperations(testDate))
      const checkDate = new Date(2024, 0, 10)
      const minDate = new Date(2024, 0, 15)

      expect(result.current.isDateDisabled(checkDate, minDate)).toBe(true)
    })

    it('should return false when date equals minDate', () => {
      const { result } = renderHook(() => useDateOperations(testDate))
      const checkDate = new Date(2024, 0, 15)
      const minDate = new Date(2024, 0, 15)

      expect(result.current.isDateDisabled(checkDate, minDate)).toBe(false)
    })

    it('should return true when date is after maxDate', () => {
      const { result } = renderHook(() => useDateOperations(testDate))
      const checkDate = new Date(2024, 0, 20)
      const maxDate = new Date(2024, 0, 15)

      expect(result.current.isDateDisabled(checkDate, null, maxDate)).toBe(true)
    })

    it('should return false when date equals maxDate', () => {
      const { result } = renderHook(() => useDateOperations(testDate))
      const checkDate = new Date(2024, 0, 15)
      const maxDate = new Date(2024, 0, 15)

      expect(result.current.isDateDisabled(checkDate, null, maxDate)).toBe(
        false,
      )
    })

    it('should return false when date is within range', () => {
      const { result } = renderHook(() => useDateOperations(testDate))
      const checkDate = new Date(2024, 0, 15)
      const minDate = new Date(2024, 0, 10)
      const maxDate = new Date(2024, 0, 20)

      expect(result.current.isDateDisabled(checkDate, minDate, maxDate)).toBe(
        false,
      )
    })

    it('should handle null minDate and maxDate', () => {
      const { result } = renderHook(() => useDateOperations(testDate))
      const checkDate = new Date(2024, 0, 15)

      expect(result.current.isDateDisabled(checkDate, null, null)).toBe(false)
    })
  })

  describe('isToday', () => {
    it('should return true for today', () => {
      const { result } = renderHook(() => useDateOperations(testDate))
      const today = new Date()

      expect(result.current.isToday(today)).toBe(true)
    })

    it('should return false for yesterday', () => {
      const { result } = renderHook(() => useDateOperations(testDate))
      const yesterday = new Date()
      yesterday.setDate(yesterday.getDate() - 1)

      expect(result.current.isToday(yesterday)).toBe(false)
    })

    it('should return false for tomorrow', () => {
      const { result } = renderHook(() => useDateOperations(testDate))
      const tomorrow = new Date()
      tomorrow.setDate(tomorrow.getDate() + 1)

      expect(result.current.isToday(tomorrow)).toBe(false)
    })

    it('should ignore time when comparing to today', () => {
      const { result } = renderHook(() => useDateOperations(testDate))
      const today = new Date()
      today.setHours(0, 0, 0, 0)

      expect(result.current.isToday(today)).toBe(true)
    })
  })
})
