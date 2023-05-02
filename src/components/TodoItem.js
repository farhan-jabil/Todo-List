import React from 'react'

export default function TodoItem(props) {

  let boxes = document.getElementsByClassName('todoCheckClass').length;
  // console.log(boxes, props.todoItems.sno)

  const save = () =>  {
    for(let i = 1; i <= boxes; i++){
      let checkbox = document.getElementById(`${"todoCheckId" + i}`);
      localStorage.setItem("checkbox" + i, checkbox.checked);	
    }
  }

  for(let i = 1; i <= boxes; i++){
    if(localStorage.length > 0){
      let checked = JSON.parse(localStorage.getItem("checkbox" + i));
      document.getElementById(`${"todoCheckId" + i}`).checked = checked;
    }
  }
  window.addEventListener('change', save);

  return (
    <div className=''>
      <div className='d-flex justify-content-between'>
        <div>
           <p><input className="todoCheckClass form-check-input" type="checkbox" id={`${"todoCheckId" + props.todoItems.sno}`}/> &nbsp; <b>{props.todoItems.sno}. {props.todoItems.title}</b></p>
           {/* {console.log(`${document.getElementById(`${"todoCheckId" + props.todoItems.sno}`).checked}`)} */}
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
