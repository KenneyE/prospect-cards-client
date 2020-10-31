import { DateTime } from 'luxon'

export const dateFormat = (date: string): string =>
  DateTime.fromISO(date).toLocaleString(DateTime.DATE_MED)
