import { describe, it, expect } from 'vitest'

import { formatDate } from './date-formatter'

describe('formatDate', () => {
  const testDate = '2024-02-22T14:30:00Z'
  const testDateOnly = '2024-02-22'

  describe('Basic Date Formatting', () => {
    it('should format date in ISO format (YYYY-MM-DD)', () => {
      const result = formatDate({
        date: testDate,
        format: 'YYYY-MM-DD',
      })
      expect(result).toBe('2024-02-22')
    })

    it('should format date in DD-MM-YYYY format', () => {
      const result = formatDate({
        date: testDate,
        format: 'DD-MM-YYYY',
      })
      expect(result).toBe('22-02-2024')
    })

    it('should format date in MM/DD/YYYY format', () => {
      const result = formatDate({
        date: testDate,
        format: 'MM/DD/YYYY',
      })
      expect(result).toBe('02/22/2024')
    })

    it('should format date in DD/MM/YYYY format', () => {
      const result = formatDate({
        date: testDate,
        format: 'DD/MM/YYYY',
      })
      expect(result).toBe('22/02/2024')
    })

    it('should accept Date object as input', () => {
      const dateObj = new Date('2024-02-22T14:30:00Z')
      const result = formatDate({
        date: dateObj,
        format: 'YYYY-MM-DD',
      })
      expect(result).toBe('2024-02-22')
    })
  })

  describe('Date with Time Formatting', () => {
    it('should format date with time in 24-hour format', () => {
      const result = formatDate({
        date: testDate,
        format: 'YYYY-MM-DD HH:mm',
        timeZone: 'UTC',
        useUtc: true,
      })
      expect(result).toBe('2024-02-22 14:30')
    })

    it('should format date with time in 12-hour format', () => {
      const result = formatDate({
        date: testDate,
        format: 'YYYY-MM-DD hh:mm A',
        timeZone: 'UTC',
        useUtc: true,
      })
      expect(result).toBe('2024-02-22 02:30 PM')
    })

    it('should format date with seconds', () => {
      const result = formatDate({
        date: testDate,
        format: 'YYYY-MM-DD HH:mm:ss',
        timeZone: 'UTC',
        useUtc: true,
      })
      expect(result).toBe('2024-02-22 14:30:00')
    })

    it('should format DD-MM-YYYY HH:mm', () => {
      const result = formatDate({
        date: testDate,
        format: 'DD-MM-YYYY HH:mm',
        timeZone: 'UTC',
        useUtc: true,
      })
      expect(result).toBe('22-02-2024 14:30')
    })

    it('should format DD-MM-YYYY HH:mm:ss', () => {
      const result = formatDate({
        date: testDate,
        format: 'DD-MM-YYYY HH:mm:ss',
        timeZone: 'UTC',
        useUtc: true,
      })
      expect(result).toBe('22-02-2024 14:30:00')
    })
  })

  describe('Long Date Formats', () => {
    it('should format full weekday and month name', () => {
      const result = formatDate({
        date: testDate,
        format: 'dddd, MMMM D, YYYY',
        locale: 'en',
      })
      expect(result).toBe('Thursday, February 22, 2024')
    })

    it('should format short weekday and month name', () => {
      const result = formatDate({
        date: testDate,
        format: 'ddd, MMM D, YYYY',
        locale: 'en',
      })
      expect(result).toBe('Thu, Feb 22, 2024')
    })

    it('should format MMMM D, YYYY', () => {
      const result = formatDate({
        date: testDate,
        format: 'MMMM D, YYYY',
        locale: 'en',
      })
      expect(result).toBe('February 22, 2024')
    })

    it('should format MMM D, YYYY', () => {
      const result = formatDate({
        date: testDate,
        format: 'MMM D, YYYY',
        locale: 'en',
      })
      expect(result).toBe('Feb 22, 2024')
    })

    it('should format D MMMM YYYY', () => {
      const result = formatDate({
        date: testDate,
        format: 'D MMMM YYYY',
        locale: 'en',
      })
      expect(result).toBe('22 February 2024')
    })

    it('should format Do MMMM YYYY', () => {
      const result = formatDate({
        date: testDate,
        format: 'Do MMMM YYYY',
        locale: 'en',
      })
      expect(result).toBe('22nd February 2024')
    })

    it('should format D MMMM YYYY, HH:mm', () => {
      const result = formatDate({
        date: testDate,
        format: 'D MMMM YYYY, HH:mm',
        locale: 'en',
        timeZone: 'UTC',
        useUtc: true,
      })
      expect(result).toBe('22 February 2024, 14:30')
    })

    it('should format dddd, MMMM D, YYYY h:mm A', () => {
      const result = formatDate({
        date: testDate,
        format: 'dddd, MMMM D, YYYY h:mm A',
        locale: 'en',
        timeZone: 'UTC',
        useUtc: true,
      })
      expect(result).toBe('Thursday, February 22, 2024 2:30 PM')
    })

    it('should format ddd, MMM D, YYYY h:mm A', () => {
      const result = formatDate({
        date: testDate,
        format: 'ddd, MMM D, YYYY h:mm A',
        locale: 'en',
        timeZone: 'UTC',
        useUtc: true,
      })
      expect(result).toBe('Thu, Feb 22, 2024 2:30 PM')
    })
  })

  describe('Time Only Formats', () => {
    it('should format time only in 24-hour format', () => {
      const result = formatDate({
        date: testDate,
        format: 'HH:mm',
        timeZone: 'UTC',
        useUtc: true,
      })
      expect(result).toBe('14:30')
    })

    it('should format time only in 12-hour format', () => {
      const result = formatDate({
        date: testDate,
        format: 'hh:mm A',
        timeZone: 'UTC',
        useUtc: true,
      })
      expect(result).toBe('02:30 PM')
    })

    it('should format time with seconds in 24-hour format', () => {
      const result = formatDate({
        date: testDate,
        format: 'HH:mm:ss',
        timeZone: 'UTC',
        useUtc: true,
      })
      expect(result).toBe('14:30:00')
    })

    it('should format time with seconds in 12-hour format', () => {
      const result = formatDate({
        date: testDate,
        format: 'hh:mm:ss A',
        timeZone: 'UTC',
        useUtc: true,
      })
      expect(result).toBe('02:30:00 PM')
    })

    it('should format time with milliseconds in 24-hour format', () => {
      const result = formatDate({
        date: testDate,
        format: 'HH:mm:ss.SSS',
        timeZone: 'UTC',
        useUtc: true,
      })
      expect(result).toBe('14:30:00.000')
    })

    it('should format time with milliseconds in 12-hour format', () => {
      const result = formatDate({
        date: testDate,
        format: 'hh:mm:ss.SSS A',
        timeZone: 'UTC',
        useUtc: true,
      })
      expect(result).toBe('02:30:00.000 PM')
    })
  })

  describe('ISO & Special Formats', () => {
    it('should format in ISO 8601 format', () => {
      const result = formatDate({
        date: testDate,
        format: 'YYYY-MM-DDTHH:mm:ssZ',
        timeZone: 'UTC',
        useUtc: true,
      })
      expect(result).toBe('2024-02-22T14:30:00+00:00')
    })

    it('should format in ISO format with milliseconds', () => {
      const result = formatDate({
        date: testDate,
        format: 'YYYY-MM-DDTHH:mm:ss.SSSZ',
        timeZone: 'UTC',
        useUtc: true,
      })
      expect(result).toBe('2024-02-22T14:30:00.000+00:00')
    })

    it('should format in ISO format with literal Z', () => {
      const result = formatDate({
        date: testDate,
        format: 'YYYY-MM-DDTHH:mm:ss.SSS[Z]',
        timeZone: 'UTC',
        useUtc: true,
      })
      expect(result).toBe('2024-02-22T14:30:00.000Z')
    })

    it('should format in filename-friendly format', () => {
      const result = formatDate({
        date: testDate,
        format: 'YYYY_MM_DD_HH_mm_ss',
        timeZone: 'UTC',
        useUtc: true,
      })
      expect(result).toBe('2024_02_22_14_30_00')
    })

    it('should format D/MMMM/YYYY HH:mm', () => {
      const result = formatDate({
        date: testDate,
        format: 'D/MMMM/YYYY HH:mm',
        locale: 'en',
        timeZone: 'UTC',
        useUtc: true,
      })
      expect(result).toBe('22/February/2024 14:30')
    })

    it('should format DD/MM/YYYY HH:mm', () => {
      const result = formatDate({
        date: testDate,
        format: 'DD/MM/YYYY HH:mm',
        timeZone: 'UTC',
        useUtc: true,
      })
      expect(result).toBe('22/02/2024 14:30')
    })
  })

  describe('Locale Support', () => {
    it('should format in English locale', () => {
      const result = formatDate({
        date: testDate,
        format: 'dddd, MMMM D, YYYY',
        locale: 'en',
      })
      expect(result).toBe('Thursday, February 22, 2024')
    })

    it('should format in Indonesian locale', () => {
      const result = formatDate({
        date: testDate,
        format: 'dddd, MMMM D, YYYY',
        locale: 'id',
      })
      expect(result).toBe('Kamis, Februari 22, 2024')
    })

    it('should format in Chinese locale', () => {
      const result = formatDate({
        date: testDate,
        format: 'dddd, MMMM D, YYYY',
        locale: 'zh',
      })
      expect(result).toContain('2024')
    })

    it('should format in Vietnamese locale', () => {
      const result = formatDate({
        date: testDate,
        format: 'dddd, MMMM D, YYYY',
        locale: 'vi',
      })
      expect(result).toContain('2024')
    })

    it('should format in Thai locale', () => {
      const result = formatDate({
        date: testDate,
        format: 'dddd, MMMM D, YYYY',
        locale: 'th',
      })
      expect(result).toContain('2024')
    })

    it('should format in Portuguese locale', () => {
      const result = formatDate({
        date: testDate,
        format: 'dddd, MMMM D, YYYY',
        locale: 'pt',
      })
      expect(result).toContain('2024')
    })

    it('should format in Spanish locale', () => {
      const result = formatDate({
        date: testDate,
        format: 'dddd, MMMM D, YYYY',
        locale: 'es',
      })
      expect(result).toContain('2024')
    })

    it('should use default locale (id) when not specified', () => {
      const result = formatDate({
        date: testDate,
        format: 'MMMM D, YYYY',
      })
      expect(result).toBe('Februari 22, 2024')
    })
  })

  describe('Timezone Support', () => {
    it('should format in UTC timezone', () => {
      const result = formatDate({
        date: testDate,
        format: 'YYYY-MM-DD HH:mm',
        useUtc: true,
      })
      expect(result).toBe('2024-02-22 14:30')
    })

    it('should format in Asia/Jakarta timezone', () => {
      const result = formatDate({
        date: testDate,
        format: 'YYYY-MM-DD HH:mm',
        timeZone: 'Asia/Jakarta',
      })
      expect(result).toBe('2024-02-22 21:30')
    })

    it('should format in America/New_York timezone', () => {
      const result = formatDate({
        date: testDate,
        format: 'YYYY-MM-DD HH:mm',
        timeZone: 'America/New_York',
      })
      expect(result).toBe('2024-02-22 09:30')
    })

    it('should format in Europe/London timezone', () => {
      const result = formatDate({
        date: testDate,
        format: 'YYYY-MM-DD HH:mm',
        timeZone: 'Europe/London',
      })
      expect(result).toBe('2024-02-22 14:30')
    })

    it('should format in Asia/Tokyo timezone', () => {
      const result = formatDate({
        date: testDate,
        format: 'YYYY-MM-DD HH:mm',
        timeZone: 'Asia/Tokyo',
      })
      expect(result).toBe('2024-02-22 23:30')
    })

    it('should use default timezone (Asia/Jakarta) when not specified', () => {
      const result = formatDate({
        date: testDate,
        format: 'YYYY-MM-DD HH:mm',
      })
      expect(result).toBe('2024-02-22 21:30')
    })
  })

  describe('Time Position', () => {
    it('should format with default time position', () => {
      const result = formatDate({
        date: testDateOnly,
        format: 'YYYY-MM-DD HH:mm:ss',
        timeZone: 'UTC',
        useUtc: true,
      })
      expect(result).toBe('2024-02-22 00:00:00')
    })

    it('should format with start of day time position', () => {
      const result = formatDate({
        date: testDateOnly,
        format: 'YYYY-MM-DD HH:mm:ss',
        timePosition: 'start',
        timeZone: 'UTC',
        useUtc: true,
      })
      expect(result).toBe('2024-02-22 00:00:00')
    })

    it('should format with end of day time position', () => {
      const result = formatDate({
        date: testDateOnly,
        format: 'YYYY-MM-DD HH:mm:ss',
        timePosition: 'end',
        timeZone: 'UTC',
        useUtc: true,
      })
      expect(result).toBe('2024-02-22 23:59:59')
    })

    it('should handle start of day with timezone', () => {
      const result = formatDate({
        date: testDateOnly,
        format: 'YYYY-MM-DD HH:mm:ss',
        timePosition: 'start',
        timeZone: 'Asia/Jakarta',
      })
      expect(result).toBe('2024-02-22 00:00:00')
    })

    it('should handle end of day with timezone', () => {
      const result = formatDate({
        date: testDateOnly,
        format: 'YYYY-MM-DD HH:mm:ss',
        timePosition: 'end',
        timeZone: 'Asia/Jakarta',
      })
      expect(result).toBe('2024-02-22 23:59:59')
    })

    it('should handle start of day with full datetime input', () => {
      const result = formatDate({
        date: testDate,
        format: 'YYYY-MM-DD HH:mm:ss',
        timePosition: 'start',
        timeZone: 'UTC',
        useUtc: true,
      })
      expect(result).toBe('2024-02-22 00:00:00')
    })

    it('should handle end of day with full datetime input', () => {
      const result = formatDate({
        date: testDate,
        format: 'YYYY-MM-DD HH:mm:ss',
        timePosition: 'end',
        timeZone: 'UTC',
        useUtc: true,
      })
      expect(result).toBe('2024-02-22 23:59:59')
    })
  })

  describe('Combined Options', () => {
    it('should combine locale and timezone', () => {
      const result = formatDate({
        date: testDate,
        format: 'dddd, MMMM D, YYYY h:mm A',
        locale: 'es',
        timeZone: 'Europe/Madrid',
      })
      expect(result).toContain('2024')
    })

    it('should combine format with time position and locale', () => {
      const result = formatDate({
        date: testDateOnly,
        format: 'dddd, MMMM D, YYYY h:mm A',
        timePosition: 'end',
        locale: 'en',
        timeZone: 'UTC',
        useUtc: true,
      })
      expect(result).toBe('Thursday, February 22, 2024 11:59 PM')
    })

    it('should handle all parameters together', () => {
      const result = formatDate({
        date: testDate,
        format: 'dddd, MMMM D, YYYY h:mm A',
        locale: 'en',
        timeZone: 'America/New_York',
      })
      expect(result).toContain('2024')
      expect(result).toContain('AM')
    })
  })

  describe('Edge Cases', () => {
    it('should handle date at midnight', () => {
      const result = formatDate({
        date: '2024-02-22T00:00:00Z',
        format: 'YYYY-MM-DD HH:mm',
        timeZone: 'UTC',
        useUtc: true,
      })
      expect(result).toBe('2024-02-22 00:00')
    })

    it('should handle date at end of day', () => {
      const result = formatDate({
        date: '2024-02-22T23:59:59Z',
        format: 'YYYY-MM-DD HH:mm:ss',
        timeZone: 'UTC',
        useUtc: true,
      })
      expect(result).toBe('2024-02-22 23:59:59')
    })

    it('should handle leap year date', () => {
      const result = formatDate({
        date: '2024-02-29T12:00:00Z',
        format: 'YYYY-MM-DD',
      })
      expect(result).toBe('2024-02-29')
    })

    it('should handle year transition', () => {
      const result = formatDate({
        date: '2023-12-31T23:59:59Z',
        format: 'YYYY-MM-DD HH:mm',
        timeZone: 'UTC',
        useUtc: true,
      })
      expect(result).toBe('2023-12-31 23:59')
    })

    it('should handle month transition', () => {
      const result = formatDate({
        date: '2024-01-31T23:59:59Z',
        format: 'YYYY-MM-DD HH:mm',
        timeZone: 'UTC',
        useUtc: true,
      })
      expect(result).toBe('2024-01-31 23:59')
    })

    it('should handle daylight saving time transition', () => {
      const result = formatDate({
        date: '2024-03-10T12:00:00Z',
        format: 'YYYY-MM-DD HH:mm',
        timeZone: 'America/New_York',
      })
      expect(result).toMatch(/2024-03-10 \d{2}:\d{2}/)
    })
  })

  describe('Return Type', () => {
    it('should always return a string', () => {
      const result = formatDate({
        date: testDate,
        format: 'YYYY-MM-DD',
      })
      expect(typeof result).toBe('string')
    })

    it('should return non-empty string', () => {
      const result = formatDate({
        date: testDate,
        format: 'YYYY-MM-DD',
      })
      expect(result.length).toBeGreaterThan(0)
    })
  })
})
