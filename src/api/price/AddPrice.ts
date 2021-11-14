import { PriceCreateModel } from "../../models/api/price/PriceCreateModel"
import { ApiResponse } from "../../models/api/response/ApiResponse"

export const addPrice = (price: PriceCreateModel) : ApiResponse => {
  return {
    statusCode: 200,
  }
}