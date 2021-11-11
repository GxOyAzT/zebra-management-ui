type DateInputProps = {
  title: string
  value: string
  readonly?: boolean
  setValue: (newValue: string) => void
}

function DateInput({ title, value, setValue, readonly }: DateInputProps) {
  return (
    <div className="DateInput-main">
      <div className="DateInput-title">
        { title }
      </div>
      <input readOnly={!readonly ? false : true} className="DateInput-input" type="date" onChange={(e) => setValue(e.target.value)} value={value}/>
    </div>
  )
}

export default DateInput
