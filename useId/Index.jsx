import React, { useId } from 'react'

const Index = () => {

const lableId = useId();
const nameId = useId();

const lableEmailId = useId();
const EmailId = useId();

  return (
    <div>
      <label htmlFor={lableId} > </label>
        Name:
        <input type="text" id={nameId} ></input>
      
      <label htmlFor={lableEmailId} > </label>
        Email:
        <input type="text" id={EmailId} ></input>
      

    </div>
  )
}

export default Index