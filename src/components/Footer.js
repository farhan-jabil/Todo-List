import React from 'react'

export default function Footer() {
  let footerStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    position: "relative",
    top: "10vh",
  } 
  return (
    <>
      <div className="text-center p-4 w-100" style={footerStyle}>
        © 2023 Copyright:
        <span className="text-reset fw-bold"> My TodoList</span>
      </div>
    </>
  )
}
