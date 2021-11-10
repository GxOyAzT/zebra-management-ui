import React from "react"

type TextInputProps = {
  title: string
  value: string
  editable?: boolean
  maxLength?: number
  setValue: (newValue: string) => void
}

function TextInput({ value, setValue, title, editable, maxLength }: TextInputProps) {

  const onChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (maxLength)
      if (e.target.value.length <= maxLength) 
        setValue(e.target.value)

    if (!maxLength)
      setValue(e.target.value)
  }

  return (
    <div className="TextInput-main">
      <div className="TextInput-title">
        { title }
      </div>
      {
        maxLength ? (
          <div data-testid="TextInput-counter-tid" className="TextInput-counter">
            { value.length } / { maxLength }
          </div>
        ) :
        <></>
      }
      <input data-testid="TextInput-input-tid" className="TextInput-input" type="text" value={value} onChange={(e) => onChangeEvent(e)}/>
    </div>
  )
}

export default TextInput
