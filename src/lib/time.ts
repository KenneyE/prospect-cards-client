import { DateTime } from 'luxon'

export const dateFormat = (date: string): string =>
  DateTime.fromISO(date).toLocaleString(DateTime.DATE_MED)

export const validYears = Array.from(
  new Array(DateTime.local().year - 1899),
  (x, i) => i + 1900,
).reverse()
