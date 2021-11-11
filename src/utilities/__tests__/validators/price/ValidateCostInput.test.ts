import { validateCostInput } from "../../../validators/price/ValidateCostInput"

describe('validateCostInput', () => {
  test('Test with 0', () => {
    expect(validateCostInput('0')).toBeFalsy()
  })

  test('Test with 0,01', () => {
    expect(validateCostInput('0,01')).toBeTruthy()
  })

  test('Test with 0.01', () => {
    expect(validateCostInput('0.01')).toBeTruthy()
  })

  test('Test with 2.91', () => {
    expect(validateCostInput('2.91')).toBeTruthy()
  })

  test('Test with 0.00', () => {
    expect(validateCostInput('0.00')).toBeFalsy()
  })

  test('Test with 050.00', () => {
    expect(validateCostInput('050.00')).toBeFalsy()
  })

  test('Test with 50.00', () => {
    expect(validateCostInput('50.00')).toBeTruthy()
  })

  test('Test with 5w.00', () => {
    expect(validateCostInput('5w.00')).toBeFalsy()
  })
})