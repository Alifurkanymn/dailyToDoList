import React from 'react'

function Checkbox({onPress}) {
  return (
    <input onClick={onPress} className="checkbox" type="checkbox"></input>
  )
}

export default Checkbox