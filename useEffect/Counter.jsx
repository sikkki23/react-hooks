import React, {  useEffect, useState } from 'react'

const Counter = () => {
const [count,setCount] = useState(0);

useEffect(() => {
    console.log('useEffect called.....');
    document.title = count
    }, [count]);
        

  return (
    <div>
        <h1>Counter = {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  )
}

export default Counter