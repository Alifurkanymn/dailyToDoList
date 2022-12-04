import React from 'react'
import '../style/components/FilledButton.scss'

function FilledButton({width, height, content, onPress}) {
  return (
    <div className="FilledButton">
        <button style={{width: width, height: height}} type="submit" onClick={onPress}>{content}</button>
    </div>
  )
}

export default FilledButton