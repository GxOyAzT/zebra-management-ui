import React, { useState } from 'react'

type PopupContextProps = {
  children: React.ReactNode
}

export const popupContext = React.createContext<PopupContextModel | null>(null)

function PopupContext({ children }: PopupContextProps) {
  const [popup, setPopup] = useState<PopupModel | null>(null)
  
  return (
    <popupContext.Provider value={{ popup: popup, setPopup: setPopup  }}>
      { children }
    </popupContext.Provider>
  )
}

export default PopupContext

export enum PopupType {
  Information = 1,
  Error = 2,
  Warning = 3
}

export type PopupModel = {
  type: PopupType,
  message: string,
}

export type PopupContextModel = {
  popup: PopupModel | null
  setPopup: (popup: PopupModel | null) => void
}