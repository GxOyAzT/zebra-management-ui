import TextInput from "../TextInput"
import { render, screen, fireEvent } from '@testing-library/react'


describe('<TextInput/>', () => {

  test('Initial value', () => {
    const setValue = jest.fn()
    
    render(<TextInput title="test-title" setValue={setValue} value="abc"/>)

    expect(screen.queryByTestId('TextInput-input-tid')).toHaveValue('abc')
  })

  test('Counter should not exists / title check', () => {
    const setValue = jest.fn()
    
    render(<TextInput title="test-title" setValue={setValue} value=""/>)

    expect(screen.queryByText(/test-title/)).toBeInTheDocument()
    expect(screen.queryByTestId('TextInput-counter-tid')).toBeNull()
  })

  test('Counter should exists', () => {
    const setValue = jest.fn()
    
    render(<TextInput title="test-title" setValue={setValue} value="" maxLength={5}/>)

    expect(screen.queryByTestId('TextInput-counter-tid')).not.toBeNull()
  })
})