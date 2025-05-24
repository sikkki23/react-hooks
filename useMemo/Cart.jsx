import React, {  useState , useMemo } from 'react'

const Cart = () => {

    const [cart,setCart] = useState([
        {id : 1 , name :"Laptop", price :50000},
        {id : 2 , name :"Tablet", price :50000},
        {id : 13 , name :"SmartWatch", price :2000},
    ]);

    const [discount,setDiscount] =useState(0);

    
    const totalPrice = useMemo(() => {
        console.log('Calulating total Price...');
        return cart.reduce((total,item) =>         
         total + item.price  ,0);

    },[cart]);


  return (
    <div>
        <h2>Cart</h2>
        {cart.map((item) => (
            <p key={item.id}>{item.name} :: {item.price}</p>
        ))}

        <h3>TotalPrice={totalPrice}</h3>
        <button onClick ={() => { console.log('Dis button clicked');
            setDiscount(discount+11)}}>
            Increase Dis
        </button>
    </div>
  )
}

export default Cart