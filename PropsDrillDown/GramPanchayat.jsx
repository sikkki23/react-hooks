import React from 'react'
import People from './People'

const GramPanchayat = ({money}) => {
  return (
    <div>
    <h1>GramPanchayat</h1>
        <People money={money}/>
        
    </div>
  )
}

export default GramPanchayat