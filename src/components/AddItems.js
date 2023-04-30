import React, { useState } from 'react'

export default function AddItems(props) {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")

    // let addTodo = (title, desc) => {
    //     console.log("Add todo", title, desc)
    //     let sno;
    //     if (props.todoItems.length === 0){
    //         sno = 1
    //     }
    //     else {
    //         sno = props.todoItems[props.todoItems.length-1].sno + 1; 
    //     }
    //     const myTodo = {
    //         sno: sno,
    //         title: title,
    //         desc: desc,
    //     }
    //     console.log(myTodo)
    //     props.setTodoItems([...props.todoItems,myTodo])
    // }

    // useEffect(()=> {
    //     localStorage.setItem("props.todoItems", JSON.stringify(props.todoItems));
    //   }, [props.todoItems])

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description cannot be blank");
        }
        else {
            props.addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }
    
    return (
        <div className='pt-5'>
            <h3 className='text-center'>Add a todo</h3>
            <form action="" onSubmit={submit}>
                <div className="mx-auto w-50 mt-3">
                    <div className="">
                        <div className="form-outline form-white mb-4">
                            <label className="form-label" htmlFor="title">Title</label>
                            <input value={title} onChange={(e)=> {setTitle(e.target.value)}} type="text" id="title" className="form-control" />
                        </div>
                        <div className="form-outline form-white mb-4">
                            <label className="form-label" htmlFor="desc">Description</label>
                            <textarea value={desc} onChange={(e)=> {setDesc(e.target.value)}} name="" id="" cols="30" rows="4" className="form-control"></textarea>
                        </div>
                    </div>
                    <div className="">
                        <button type="submit" className="btn btn-outline-primary btn-sm mb-4 mx-auto">
                            Add todo
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}
