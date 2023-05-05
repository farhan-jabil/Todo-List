import React, { useState } from 'react'

export default function TodoItem(props) {

  const ToggleSwitch = ({
    checked,
    label,
    id,
    disabled,
    ariaInvalid,
    ariaLabelledby,
    onChange,
  }) => {
    return (
      <>
        {/* <label htmlFor={id} className="ToggleSwitch ToggleSwitch_label"> */}
          {/* {label} */}
          <span className="ToggleSwitch_switch">
            <input
              type="checkbox"
              checked={checked}
              id={id}
              className="ToggleSwitch_checkbox form-check-input"
              disabled={disabled}
              onChange={onChange}
              aria-invalid={ariaInvalid}
              aria-labelledby={ariaLabelledby}
            />
            <span className="ToggleSwitch_slider" />
          </span>
        {/* </label> */}
      </>
    );
  };

  // let boxes = document.getElementsByClassName('todoCheckClass').length + 1;
  // console.log(boxes)

  // const save = () =>  {
  //   for(let i = 1; i <= boxes; i++){
  //     let checkbox = document.getElementById(`${`checkboxId` + i}`);
  //     localStorage.setItem("checkbox" + i, checkbox.checked);	
  //   }
  // }

  // for(let i = 1; i <= boxes; i++){
  //   if(localStorage.length > 0){
  //     let checked = JSON.parse(localStorage.getItem(i));
  //     document.getElementById(`${`checkboxId` + props.todoItems.sno}`).checked = checked;
  //   }
  // }
  // window.addEventListener('change', save);
  // console.log(document.getElementsByClassName('todoCheckClass').length)

  const [selected, setSelected] = useState(localStorage.getItem(`checkBox${props.todoItems.sno}`) === 'true');

  return (
    <div className=''>
      <div className='d-flex justify-content-between'>
        <div>
          <p><ToggleSwitch checked={selected}
            id={`${`checkboxId` + props.todoItems.sno}`}
            onChange={
              (e) => {
                localStorage.setItem(`checkBox${props.todoItems.sno}`, `${e.target.checked}`);
                setSelected(e.target.checked);
              }
            } /> &nbsp; <b>{props.todoItems.sno}. {props.todoItems.title}</b></p>
          <p>{props.todoItems.desc}</p>
        </div>
        <div className='position-relative'>
          <button type="submit" className="btn btn-danger btn-sm rounded-circle" onClick={() => { props.onDelete(props.todoItems)
          localStorage.removeItem(`checkBox${props.todoItems.sno}`);
          }}>
            <i className="fa fa-trash" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <hr />
    </div>
  )
}

{/* <input className="todoCheckClass form-check-input" type="checkbox" id={`${`checkboxId` + props.todoItems.sno}`} /> */}
