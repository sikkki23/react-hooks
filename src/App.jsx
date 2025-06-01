import React from 'react'
//import Counter from '../useState/Counter'
import FetchData from '../useEffect/FetchData'
import Counter from '../useEffect/Counter'
import ChangeBg from '../useLayOutEffect/ChangeBg'
import IndGov from '../PropsDrillDown/IndGov'
import Reducer from '../useReducer/Reducer'
import Cart from '../useMemo/Cart'
import UseCallback from '../useCallback/usecallback'
// import Index from '../useTransition/Index'
import Index from '../useRef/Index'

const App = () => {
  return (
    <div>
       {/* <Counter/>  */}
      {/* <FetchData/> */}

      {/* useLayOutEffect hook */ }
      {/* <ChangeBg/>  */}

      {/* props DrillDown and use Conret hook */}
      {/* <IndGov />  */}

      {/* useReducer hook */}
      {/* <Reducer /> */}
        
      {/* useMemo hook */}
      {/* <Cart/> */}

      {/* useCallback hook */}
      {/* <UseCallback /> */}

      {/* useTransition hook */}     
      {/* <Index /> */}
     
      {/* useRef hook */}
      <Index />
      </div>
    
  )
}

export default App