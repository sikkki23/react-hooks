import React, { useState } from 'react'
import MoneyContext  from './MoneyContext'


const MoneyState = (props) => {

    const doller = 500;
    const [count,setCount] = useState(0);

    const student ={
        name:"Ram",
        age:20,
        city:"patna"
    }

  return (
    <MoneyContext.Provider value={{doller,student,count,setCount}}>
        {props.children}
    </MoneyContext.Provider>
  )
}

export default MoneyState;