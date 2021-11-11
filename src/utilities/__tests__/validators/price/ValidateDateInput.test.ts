import { validateDateInput } from "../../../validators/price/ValidateDateInput"

describe('ValidateDateInput', () => {
  test('', () => {
    expect(validateDateInput('2000-01-01')).toBeTruthy()
  })

  test('', () => {
    expect(validateDateInput('2000-01-32')).toBeFalsy()
  })
})