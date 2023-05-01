import React from 'react'

export default function TodoItem(props) {

  return (
    <div className=''>
      <div className='d-flex justify-content-between'>
        <div>
          <p><b>{props.todoItems.sno}</b>. {props.todoItems.title}</p>
          <p>{props.todoItems.desc}</p>
        </div>
        <div className='position-relative'>
          <button type="submit" className="btn btn-danger btn-sm rounded-circle" onClick={() => props.onDelete(props.todoItems)}>
          <i className="fa fa-trash" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <hr />
    </div>
  )
}
