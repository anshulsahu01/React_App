import React, { useState } from 'react'
//for manging a variable we have hook state

export default function Counter() {
    //let count =0
    let [count,setCount]=useState(1)
    function increase(){
        setCount(count+1)
        // alert("increase");
        //alert(count)
    }
    function decrease(){
        setCount(count-1)
        //alert(count)
    }
  return (
    <>
    <h1>
        Counter: {count}
    </h1>
    <button onClick={increase}>Increment </button>
    <button onClick={decrease}>Decriment</button>
    </>
  )
}
