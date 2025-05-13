import React, { useState } from 'react'

const Counter = () => {

const [counter, setCounter] = useState(0);

const increase = () => {
    setCounter(counter+1);
}

const decrease = () => {
    setCounter(counter-1);
}



  return (
    <div>
        <h1>{counter}</h1>
    <button onClick={increase}>increase by 1</button>
    <button onClick={decrease}>decrease by 1</button>
    
    </div>
  )
}

export default Counter