import { render, screen, fireEvent } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import PriceCreate from "../PriceCreate"

import { popupContext, PopupContextModel } from '../../../../contexts/PopupContext'
import * as AddPrice from '../../../../api/price/AddPrice'

describe('<PriceCreate/>', () => {
  test('Correct display', () => {
    render(<PriceCreate productId="123"/>)

    expect(screen.queryByText(/PRICE/)).toBeInTheDocument()
    expect(screen.queryByText(/TAX/)).toBeInTheDocument()
    expect(screen.queryByText(/DATE/)).toBeInTheDocument()
    expect(screen.queryByText(/SAVE/)).toBeInTheDocument()
  })

  test('Incorrect tax value format', () => {
    const addPriceMockFn = jest.fn()

    jest.spyOn(AddPrice, 'addPrice').mockImplementation(() => addPriceMockFn())

    const setPopupMockFn = jest.fn()
    const popupContextModel: PopupContextModel = {
      popup: null,
      setPopup: setPopupMockFn
    }

    render(
      <popupContext.Provider value={popupContextModel}>
        <PriceCreate productId="123"/>
      </popupContext.Provider>
    )

    const button = screen.queryByRole('button') as HTMLButtonElement
    
    act(() => {
      button.click()
    })

    expect(setPopupMockFn).toHaveBeenCalledTimes(1)
    expect(addPriceMockFn).toHaveBeenCalledTimes(0)
  })

  test('Incorrect price value format', () => {
    const addPriceMockFn = jest.fn()

    jest.spyOn(AddPrice, 'addPrice').mockImplementation(() => addPriceMockFn())

    const setPopupMockFn = jest.fn()
    const popupContextModel: PopupContextModel = {
      popup: null,
      setPopup: setPopupMockFn
    }

    render(
      <popupContext.Provider value={popupContextModel}>
        <PriceCreate productId="123"/>
      </popupContext.Provider>
    )

    const button = screen.queryByRole('button') as HTMLButtonElement
    const taxInput = screen.queryByDisplayValue('18') as HTMLInputElement
    
    act(() => {
      taxInput.value = '101'
    })

    act(() => {
      button.click()
    })

    expect(setPopupMockFn).toHaveBeenCalledTimes(1)
    expect(addPriceMockFn).toHaveBeenCalledTimes(0)
  })

  test('Correct formats', () => {
    const addPriceMockFn = jest.fn()

    jest.spyOn(AddPrice, 'addPrice').mockImplementation(() => addPriceMockFn())

    const setPopupMockFn = jest.fn()
    const popupContextModel: PopupContextModel = {
      popup: null,
      setPopup: setPopupMockFn
    }

    render(
      <popupContext.Provider value={popupContextModel}>
        <PriceCreate productId="123"/>
      </popupContext.Provider>
    )

    const button = screen.queryByRole('button') as HTMLButtonElement
    const costInput = screen.queryByDisplayValue('0,00') as HTMLInputElement
    
    act(() => {
      fireEvent.change(costInput, { target: {value: '0,01'}})
    })

    act(() => {
      button.click()
    })

    expect(setPopupMockFn).toHaveBeenCalledTimes(0)
    expect(addPriceMockFn).toHaveBeenCalledTimes(1)
  })
})