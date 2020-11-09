import { Maybe } from '../types/graphql'
import { TestFunction } from 'yup'

export const noopFn = (): void => {
  /* Intentionally do nothing */
}

export const checkFileSize: TestFunction<
Maybe<{ document: File }[]> | undefined
> = (files?: Maybe<{ document: File }[]>): boolean => {
  let valid = true
  if (files) {
    files.forEach((file) => {
      const size = file.document.size / 1024 / 1024
      if (size > 10) {
        valid = false
      }
    })
  }
  return valid
}
