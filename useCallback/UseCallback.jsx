import React, { useCallback, useState } from 'react'
import ChildComponent from './childComponent';

const UseCallback = () => {

    const [counter1,setCounter1] = useState(0);
    const [counter2,setCounter2] = useState(0);

//    const handleClick = () => setCounter1(counter1+1);
const handleClick = useCallback( ()=> setCounter1(counter1+1) ,[counter1] );


  return (
    <div>
        
        <h1>UseCallback conter2 = {counter2}</h1>
        <ChildComponent handleClick ={ handleClick }/>
        <button onClick={ () => setCounter2(counter2 + 1)}>
        counter_1_Increase
        </button>
        
        
    </div>
  )
};

export default UseCallback