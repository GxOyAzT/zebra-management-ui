import { useState, useRef, useEffect } from 'react'
import { PopupType, PopupModel } from '../../contexts/PopupContext'

type PopupProps = {
  popupModel: PopupModel | null
  closePopup: (popupModel: PopupModel | null) => void
}

function Popup({ popupModel, closePopup }: PopupProps) {
  const [timer, setTimer] = useState(1000)
  const timerRef: { current: NodeJS.Timeout | null} = useRef(null)

  console.log(timer)

  useEffect(() => {
    timerRef.current = setInterval(async () => {
      setTimer(timer - 1)
      if (timer < 0) {
        clearInterval(timerRef.current as NodeJS.Timeout)
        closePopup(null)
      }
    }, 10)
    return () => {
      clearInterval(timerRef.current as NodeJS.Timeout)
    }
  }, [timer])

  useEffect(() => {
    setTimer(1000)
  }, [popupModel?.id])

  const popupType = popupModel?.type === PopupType.Error ? 'error' : popupModel?.type === PopupType.Warning ? 'warning' : popupModel?.type === PopupType.Success ? 'success' : 'information'

  return (
    popupModel ? (
      <div className={`Popup-main Popup-mian-${popupType} noselect`}>
        <div>{ popupModel?.message }</div>
        <div className="Popup-hide" onClick={() => closePopup(null)}>X</div>
        <div className="Popup-bar-wrapper">
          <div className="Popup-bar-progress" style={{ width: `${timer / 10}%`, height: 10 }}></div>
        </div>
      </div>
    ) : <></>
  )
}

export default Popup
