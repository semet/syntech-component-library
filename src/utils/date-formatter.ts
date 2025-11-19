import 'dayjs/locale/en'
import 'dayjs/locale/id'
import 'dayjs/locale/zh'
import 'dayjs/locale/vi'
import 'dayjs/locale/th'
import 'dayjs/locale/pt'
import 'dayjs/locale/es'

import dayjs from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'

import type { DateFormat } from './date-helpers'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(advancedFormat)

export type Locale = 'en' | 'id' | 'zh' | 'vi' | 'th' | 'pt' | 'es'

export type ExtendedDateFormat =
  | DateFormat
  | 'DD-MM-YYYY HH:mm'
  | 'DD-MM-YYYY HH:mm:ss'
  | 'D MMMM YYYY, HH:mm'
  | 'D/MMMM/YYYY HH:mm'
  | 'DD/MM/YYYY HH:mm'
  | 'YYYY_MM_DD_HH_mm_ss'
  | 'dddd, MMMM D, YYYY'
  | 'ddd, MMM D, YYYY'
  | 'MMMM D, YYYY'
  | 'MMM D, YYYY'
  | 'D MMMM YYYY'
  | 'Do MMMM YYYY'
  | 'HH:mm'
  | 'hh:mm A'
  | 'HH:mm:ss'
  | 'hh:mm:ss A'
  | 'HH:mm:ss.SSS'
  | 'hh:mm:ss.SSS A'
  | 'YYYY-MM-DD HH:mm'
  | 'YYYY-MM-DD hh:mm A'
  | 'YYYY-MM-DD HH:mm:ss'
  | 'YYYY-MM-DD hh:mm:ss A'
  | 'dddd, MMMM D, YYYY h:mm A'
  | 'ddd, MMM D, YYYY h:mm A'
  | 'YYYY-MM-DDTHH:mm:ssZ'
  | 'YYYY-MM-DDTHH:mm:ss.SSSZ'
  | 'YYYY-MM-DDTHH:mm:ss.SSS[Z]'

export type TimeZone =
  | 'UTC'
  | 'GMT'
  | 'Etc/GMT+12'
  | 'Etc/GMT+11'
  | 'Pacific/Honolulu'
  | 'America/Anchorage'
  | 'America/Los_Angeles'
  | 'America/Denver'
  | 'America/Chicago'
  | 'America/New_York'
  | 'America/Toronto'
  | 'America/Sao_Paulo'
  | 'Atlantic/Azores'
  | 'Europe/London'
  | 'Europe/Paris'
  | 'Europe/Berlin'
  | 'Europe/Madrid'
  | 'Europe/Rome'
  | 'Europe/Athens'
  | 'Africa/Cairo'
  | 'Europe/Moscow'
  | 'Asia/Dubai'
  | 'Asia/Tehran'
  | 'Asia/Karachi'
  | 'Asia/Kolkata'
  | 'Asia/Dhaka'
  | 'Asia/Bangkok'
  | 'Asia/Jakarta'
  | 'Asia/Shanghai'
  | 'Asia/Singapore'
  | 'Asia/Tokyo'
  | 'Asia/Seoul'
  | 'Australia/Sydney'
  | 'Pacific/Auckland'

type DateFormatterParams = {
  date: string | Date
  format: ExtendedDateFormat
  timePosition?: 'start' | 'end'
  locale?: Locale
  useUtc?: boolean
  timeZone?: TimeZone
}

/**
 * Formats a given date string according to the specified format, locale, and timezone settings.
 *
 * @param {Object} parameters - The parameters for date formatting.
 * @param {string} parameters.date - The input date string.
 * @param {ExtendedDateFormat} parameters.format - The format to output the date.
 * @param {'start' | 'end'} [parameters.timePosition] - Adjusts the date to the start or end of the day.
 * @param {Locale} [parameters.locale='id'] - The locale for formatting (default: `'id'`).
 * @param {boolean} [parameters.useUtc=false] - Whether to format the date in UTC mode (default: `false`).
 * @param {TimeZone} [parameters.timeZone='Asia/Jakarta'] - The timezone for formatting (default: `'Asia/Jakarta'`).
 * @returns {string} The formatted date string.
 *
 * @example
 * formatDate({ date: '2024-02-22T14:00:00Z', format: 'YYYY-MM-DD HH:mm', timeZone: 'America/New_York' });
 * Output: '2024-02-22 09:00'
 *
 * @example
 * formatDate({ date: '2024-02-22', format: 'dddd, MMMM D, YYYY', locale: 'en' });
 *  Output: 'Thursday, February 22, 2024'
 *
 * @example
 * formatDate({ date: '2024-02-22', format: 'YYYY-MM-DD', timePosition: 'start' });
 * Output: '2024-02-22'
 */

export function formatDate(parameters: DateFormatterParams): string {
  const {
    date,
    format,
    timePosition,
    locale = 'id',
    useUtc = false,
    timeZone = 'Asia/Jakarta',
  } = parameters

  const dateOnly = dayjs(date).format('YYYY-MM-DD')

  const getBaseDate = (dateInput: string | Date) =>
    useUtc ? dayjs.utc(dateInput) : dayjs.tz(dateInput, timeZone)
  const getFormattedDate = (dateInput: string | Date) =>
    useUtc ? dayjs.utc(dateInput) : dayjs(dateInput).tz(timeZone)

  switch (timePosition) {
    case 'start': {
      return getBaseDate(dateOnly).startOf('day').locale(locale).format(format)
    }
    case 'end': {
      return getBaseDate(dateOnly).endOf('day').locale(locale).format(format)
    }
    default: {
      return getFormattedDate(date).locale(locale).format(format)
    }
  }
}
