import React, { useState } from 'react'

export default function Button(props) {
    // console.log(props);
    // const [count, setcount]=useState(0)
    // const handleclick=()=>{
    // setcount(count+1)
    // }
  return (
    <div>
      <button onClick={props.abcc}>I am pressed {props.count} times </button>
    </div>
  )
}
