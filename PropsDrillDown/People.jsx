import React from 'react'
import GramPanchayat from './GramPanchayat'
import { useContext } from 'react'
import MoneyContext from './useContext/MoneyContext'





const People = () => {
  const data = useContext(MoneyContext);
  console.log("Student:",data.student);
  return (
    <div> <h1>People money={data.doller}</h1>
    <h3>count : {data.count}  </h3>
    <button onClick={() => { data.setCount(data.count+1)}}>Count++</button>
    </div>
  )
}

export default People;