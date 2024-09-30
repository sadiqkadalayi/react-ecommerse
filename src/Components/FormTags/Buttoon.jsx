import React from 'react'

function Buttoon({val,variant}) {
  return (
    <>
    <button className={`btn ${variant}`}>{val ?? "Button"}</button>
    </>
  )
}

export default Buttoon