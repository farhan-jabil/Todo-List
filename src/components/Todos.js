import React from 'react'
import TodoItem from './TodoItem'
import AddItems from './AddItems'

export default function Todos() {

  const todoItems = [
    {
      sno: 1,
      title: "Going to job",
      desc: "Job 10-6",
    },
    {
      sno: 2,
      title: "Going to market",
      desc: "Market time 6-7",
    },
    {
      sno: 3,
      title: "Going to club",
      desc: "Club time 8-12",
    },
  ]

  return (
    <div className='container mt-3'>
      <h3 className='text-center'>Todo list</h3>
      <AddItems/>
      {todoItems.map((items) =>
        <TodoItem todoItems={items} key={items.sno} />
      )}
    </div>
  )
}
