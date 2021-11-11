import ActivityIndicator from '../loading/ActivityIndicator'

type ButtonProps = {
  title: string
  activityIndicator?: boolean
  click: () => void
}

function Button({ title, activityIndicator, click } : ButtonProps) {
  return (
    <button className="Button-button" onClick={() => activityIndicator ? {} : click()}>
      {
        activityIndicator ?
        <div className="Button-activityIndicator-wrapper">
          <ActivityIndicator singleLine/>
        </div>
        :
        title
      }
    </button>
  )
}

export default Button
