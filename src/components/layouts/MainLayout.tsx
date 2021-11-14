import Popup from '../popup/Popup'
import PriceCreate from '../views/price-create/PriceCreate'

function MainLayout() {
  return (
    <div>
      <Popup />
      <PriceCreate productId="123"/>
    </div>
  )
}

export default MainLayout