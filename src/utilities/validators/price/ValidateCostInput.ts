export const validateCostInput = (cost: string): boolean => {
  if (cost.match(/^([0][,.]([0-9][1-9]|[1-9][0-9])|[1-9]{2})$|^[1-9][0-9]{0,4}[,.][0-9]{2}$/g)) return true

  return false
}