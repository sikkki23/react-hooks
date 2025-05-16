import React, { useLayoutEffect, useState } from 'react'

const ChangeBg = () => {

    const [bgColor,setColor] = useState("violet");

    useLayoutEffect(() => {
        document.body.style.backgroundColor = bgColor;
    }, [bgColor])

  return (
    <div>
        <h2>Current Background Color :{bgColor}</h2>
        <button onClick={()=>setColor('yellow')}>yellow</button>
        <button onClick={()=>setColor('green')}>green</button>
        <button onClick={()=>setColor('gray')}>gray</button>
    </div>
  )
}

export default ChangeBg