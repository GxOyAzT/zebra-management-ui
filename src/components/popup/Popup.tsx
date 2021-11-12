import { useContext } from 'react'
import { popupContext, PopupType } from '../../contexts/PopupContext'

function Popup() {
  const popup = useContext(popupContext)

  return (
    popup?.popup ? (
      <div className={`Popup-main Popup-mian-${popup.popup.type === PopupType.Error ? 'error' : popup.popup.type === PopupType.Warning ? 'warning' : 'information'} noselect`}>
        <div>{ popup.popup.message }</div>
        <div className="Popup-hide" onClick={() => popup.setPopup(null)}>x</div>
      </div>
    ) : <></>
  )
}

export default Popup
