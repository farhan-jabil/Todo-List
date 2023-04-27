import React from 'react'

export default function TodoItem(props) {
  
  return (
    <div>
      <p>{props.todoItems.title}</p>
      <p>{props.todoItems.desc}</p>
      <button type="submit" className="btn btn-danger btn-sm" onClick={() => props.onDelete(props.todoItems)}>
        Delete
      </button>
      <hr />
    </div>
  )
}
