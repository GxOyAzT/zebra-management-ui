export const validateTaxInput = (tax: string): boolean => {
  if (tax.match(/^([1-9])$|^([1-9][0-9])$|^100$/g)) return true

  return false
}