import { render, screen } from "@testing-library/react"
import Button from "../Button"

describe('<Button/>', () => {
  test('Button display test', () => {
    const click = jest.fn()
    render(<Button title="_title_" click={click}/>)

    const button = screen.getByRole('button') as HTMLButtonElement

    expect(button.innerHTML).toBe('_title_')
  })

  test('Button test click functionality', () => {
    const click = jest.fn()
    render(<Button title="_title_" click={click}/>)

    const button = screen.getByRole('button') as HTMLButtonElement

    button.click()

    expect(button.innerHTML).toBe('_title_')
    expect(click).toBeCalledTimes(1)
  })

  test('Button test click on activity indicator functionality', () => {
    const click = jest.fn()
    render(<Button title="_title_" click={click} activityIndicator/>)

    const button = screen.getByRole('button') as HTMLButtonElement

    button.click()

    expect(button.innerHTML).not.toBe('_title_')
    expect(click).toBeCalledTimes(0)
  })
})