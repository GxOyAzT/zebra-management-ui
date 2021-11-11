import { useState } from "react"
import { PriceCreateModel } from "../../../models/api/price/PriceCreateModel"
import Button from "../../atoms/button/Button"
import TextInput from "../../atoms/text-input/TextInput"

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

  const postNewPrice = async () => {
    const tax: number = parseInt(newPrice.tax)
    console.log(tax)
  }
  
  return (
    <div className="NewPrice-wrapper">
      <div className="NewPrice-wrapper-centered">
        <TextInput title="PRICE ($)" setValue={(e) => setNewPrice({ ...newPrice, cost: e })} value={newPrice.cost}/>
        <TextInput title="TAX (%)" setValue={(e) => setNewPrice({ ...newPrice, tax: e })} value={newPrice.tax.toString()}/>
        <div className="NewPrice-spanTwoColumns">
          <TextInput title="DATE (DD-MM-YYYY)" setValue={(e) => setNewPrice({ ...newPrice, from: e })} value={newPrice.from}/>
        </div>
        <div className="NewPrice-spanTwoColumns">
          <Button title="SAVE" click={() => postNewPrice()}/>
        </div>
      </div>
    </div>
  )
}

export default PriceCreate
