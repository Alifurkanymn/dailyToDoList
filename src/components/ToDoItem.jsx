import React from 'react'
import '../style/components/ToDoItem.scss'

function ToDoItem({content, onPress}) {
  return (
    <div className="toDoItem">
        <p onClick={onPress}>{content}</p>
    </div>
  )
}

export default ToDoItem