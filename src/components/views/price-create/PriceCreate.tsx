import { useState, useContext } from "react"

import Button from "../../atoms/button/Button"
import DateInput from "../../atoms/date-input/DateInput"
import TextInput from "../../atoms/text-input/TextInput"
import { popupContext, PopupType } from "../../../contexts/PopupContext"

import { PriceCreateModel } from '../../../models/api/price/PriceCreateModel'

import { addPrice } from "../../../api/price/AddPrice"

import { validateTaxInput } from '../../../utilities/validators/price/ValidateTaxInput'
import { validateCostInput } from '../../../utilities/validators/price/ValidateCostInput'

type PriceCreateProps = {
  productId: string
}

type PriceCreateTmp = {
  cost: string,
  tax: string,
  from: string
}

function PriceCreate({ productId }: PriceCreateProps) {
  const [newPrice, setNewPrice] = useState<PriceCreateTmp>({ cost: '0,00', tax: '18', from: new Date().toISOString().split('T')[0] })
  const [isFetching, setIsFetching] = useState(false)

  const popup = useContext(popupContext)

  const postNewPrice = async () => {
    setIsFetching(true)

    if (!validateTaxInput(newPrice.tax)) {
      popup?.setPopup({ message: 'Incorrect tax format.', type: PopupType.Warning })
      return
    }

    if (!validateCostInput(newPrice.cost)) {
      popup?.setPopup({ message: 'Incorrect price format.', type: PopupType.Warning })
      return
    }

    const priceCreateModel: PriceCreateModel = {
      productId: productId,
      cost: parseFloat(newPrice.cost),
      tax: parseInt(newPrice.tax),
      from: newPrice.from
    }

    var result = await addPrice(priceCreateModel)

    if (result.statusCode === 200) {
      popup?.setPopup({ message: 'Successfully added.', type: PopupType.Information })
    } else {
      popup?.setPopup({ message: result.message ?? '', type: PopupType.Warning })
    }

    setIsFetching(false)
  }
  
  return (
    <div className="NewPrice-wrapper">
      <div className="NewPrice-wrapper-centered">
        <TextInput title="PRICE ($)" setValue={(e) => setNewPrice({ ...newPrice, cost: e })} value={newPrice.cost}/>
        <TextInput title="TAX (%)" setValue={(e) => setNewPrice({ ...newPrice, tax: e })} value={newPrice.tax.toString()}/>
        <div className="NewPrice-spanTwoColumns">
          <DateInput title="DATE (DD-MM-YYYY)" setValue={(e) => setNewPrice({ ...newPrice, from: e })} value={newPrice.from}/>
        </div>
        <div className="NewPrice-spanTwoColumns">
          <Button activityIndicator={isFetching} title="SAVE" click={() => postNewPrice()}/>
        </div>
      </div>
    </div>
  )
}

export default PriceCreate
