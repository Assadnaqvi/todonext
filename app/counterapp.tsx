"use client";
import React, { useState } from 'react'


export default function Counterapp() {
  

  const [counter,setCounter]= useState(0);
const decrement= () => {
setCounter(counter-1)
}

const increment= () => {
    setCounter(counter+1)
}

return (
<>
<div>Counterapp</div>
<br/>
<button onClick={decrement}> Decrement </button>

{counter} 
<button onClick={increment} > Increment </button>

    
 
 </>
    )
}
