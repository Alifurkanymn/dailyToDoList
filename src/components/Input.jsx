import React from 'react'
import '../style/components/Input.scss'

function Input({placeholder, onInput}) {
  return (
        <input
        type="text"
        id="toDoInput"
        placeholder={placeholder}
        onChange={onInput}
        />
  )
}

export default Input