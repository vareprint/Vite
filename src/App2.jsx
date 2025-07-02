import React, { useEffect, useMemo, useState } from 'react'

function App2() {

  const [cartitem, setCartItem]= useState([{name:"pen", qty:2, price:200},
    {name:"book", qty:1, price:400}
   ])


  const total = useMemo(()=>{
    console.log("calculating");
   return cartitem.reduce((sum, item)=>
     sum + item.qty * item.price, 0);
   },[cartitem]);

const addProduct =()=>{
  console.log("adding");
  setCartItem((prev)=>[
    ...prev, {name:"notebook", qty:1, price:500}
  ]);


}
   
   
  return (
    <>

    <h2>{total}</h2>
    


    <button onClick={addProduct}>Add product</button>
    </>
  )
}

export default App2