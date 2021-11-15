import { useContext } from 'react'
import Popup from '../popup/Popup'
import { popupContext } from '../../contexts/PopupContext'

function MainLayout() {
  const pop = useContext(popupContext)
  return (
    <div>
      {
        pop?.popup ? <Popup popupModel={pop.popup} closePopup={pop.setPopup}/> : <></>
      }
    </div>
  )
}

export default MainLayout