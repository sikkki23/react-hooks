import React, { useReducer } from 'react'

    const counter = (state, action) => {
        switch(action.type){
            case 'INCREMENT' :
                return { count : state.count + 1 }  
            case 'DECREMENT' :
                return { count : state.count -1 }      
            default : return state;
            }

    } 

const Reducer = () => {

    const [state, dispatch]= useReducer(counter,{count : 0 });
  return (
    <div>
        <h1>count value ={state.count}</h1>
        <button onClick ={() => dispatch({type : 'INCREMENT'})}>INCREMENT</button>
        <button onClick ={() => dispatch({type : 'DECREMENT'})}>DECREMENT</button>
    </div>
  )
}

export default Reducer