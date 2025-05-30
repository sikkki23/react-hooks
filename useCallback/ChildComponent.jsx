import React, { useEffect } from 'react'


const ChildComponent = ({handleClick}) => {
    useEffect (() => {
        console.log('Child Component called');
    } ,[handleClick]);

  return (
    <div>ChildComponent</div>
  )
}

export default ChildComponent