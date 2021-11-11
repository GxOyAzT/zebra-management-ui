import { validateTaxInput } from "../../../validators/price/ValidateTaxInput"

describe('validateTaxInput', () => {
  test('Test with 0', () => {
    expect(validateTaxInput('0')).toBeFalsy()
  })

  test('Test with 1', () => {
    expect(validateTaxInput('1')).toBeTruthy()
  })

  test('Test with 01', () => {
    expect(validateTaxInput('01')).toBeFalsy()
  })

  test('Test with s', () => {
    expect(validateTaxInput('s')).toBeFalsy()
  })

  test('Test with 59', () => {
    expect(validateTaxInput('59')).toBeTruthy()
  })

  test('Test with 100', () => {
    expect(validateTaxInput('100')).toBeTruthy()
  })

  test('Test with 101', () => {
    expect(validateTaxInput('101')).toBeFalsy()
  })

  test('Test with 101', () => {
    expect(validateTaxInput('1d')).toBeFalsy()
  })
})