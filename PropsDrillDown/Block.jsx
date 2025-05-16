import React from 'react'
import GramPanchayat from './GramPanchayat'

const Block = ({money}) => {
  return (
    <div>
        <h1>Block</h1>
        <GramPanchayat money={money}/>
    </div>
  )
}

export default Block