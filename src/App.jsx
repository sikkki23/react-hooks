import React from 'react'
//import Counter from '../useState/Counter'
import FetchData from '../useEffect/FetchData'
import Counter from '../useEffect/Counter'
import ChangeBg from '../useLayOutEffect/ChangeBg'
import IndGov from '../PropsDrillDown/IndGov'
import Reducer from '../useReducer/Reducer'

const App = () => {
  return (
    <div>
       {/* <Counter/> 
      <FetchData/>
      <ChangeBg/>
      <IndGov /> */}
      <Reducer />
      </div>
    
  )
}

export default App