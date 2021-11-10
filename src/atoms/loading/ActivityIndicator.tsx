type ActivityIndicatorProps = {
  singleLine?: boolean
}

function ActivityIndicator({ singleLine }: ActivityIndicatorProps) {
  return (
    <div className="ActivityIndicator-wrapper">
      {
        singleLine ? <div className="ActivityIndicator-square"></div> : (
          <>
            <div className="ActivityIndicator-square"></div>
            <div className="ActivityIndicator-separator"></div>
            <div className="ActivityIndicator-square ActivityIndicator-square-back"></div>
            <div className="ActivityIndicator-separator"></div>
            <div className="ActivityIndicator-square"></div>
          </>
        )
      }
    </div> 
  )
}

export default ActivityIndicator
