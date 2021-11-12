import React from "react"

type TextInputProps = {
  title: string
  value: string
  readonly?: boolean
  maxLength?: number
  setValue: (newValue: string) => void
  incorrectValue?: boolean
}

function TextInput({ value, setValue, title, readonly, maxLength }: TextInputProps) {

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
      <input readOnly={!readonly ? false : true} data-testid="TextInput-input-tid" className="TextInput-input" type="text" value={value} onChange={(e) => onChangeEvent(e)}/>
    </div>
  )
}

export default TextInput
