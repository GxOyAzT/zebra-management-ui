export const validateDateInput = (date: string): boolean => {
  if (new Date(date)) return true

  return false
}