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
        <div>
            <h3 className='text-center'>Add a todo</h3>
            <form action="" onSubmit={submit}>
                <div className="mx-auto w-50">
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
                        <button type="submit" className="btn btn-outline-primary mb-4 mx-auto">
                            Add todo
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )

    // const [title, setTitle] = useState("");
    // const [desc, setDesc] = useState("");


    // const submit = (e) => {
    //     e.preventDefault();
    //     if (!title || !desc) {
    //         alert("Title or Description cannot be blank");
    //     }
    //     else {
    //         props.addTodo(title, desc);
    //         // setTitle("");
    //         // setDesc("");
    //     }
    // }
    // return (
    //     <div className="container my-3">
    //         <h3>Add a Todo</h3>
    //         <form onSubmit={submit}>
    //             <div className="mb-3">
    //                 <label htmlFor="title" className="form-label">Todo Title</label>
    //                 <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp" />

    //             </div>
    //             <div className="mb-3">
    //                 <label htmlFor="desc" className="form-label">Todo Description</label>
    //                 <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control" id="desc" />
    //             </div>
    //             <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
    //         </form>
    //     </div>
    // )
}
