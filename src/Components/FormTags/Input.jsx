import React from 'react'

function Input({lab}) {
  return (
    <>
    <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">{lab ?? "Lorem Ipsum"}</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
    </>
  )
}

export default Input