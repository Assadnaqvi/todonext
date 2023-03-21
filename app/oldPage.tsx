
"use client";

import { useState } from "react";

export default function Page()
{
    const [val,setVal]=useState("hello");
    const[val1,setVal1]=useState("how are you");
    const onChangeHandler=(e:any)=>{
      
        console.log("e is",e.target.value);
setVal(e.target.value);
    };
const onChangeHandler1=(e:any)=>{
    console.log("e is",e.target.value);
setVal1(e.target.value);

    };
    return( 
        <>
         <input type={"text"} value={val} onChange={onChangeHandler}></input>
        <br />
        <input type="text" value={val1} onChange={onChangeHandler1}></input>
   <br />
        length of string1 : {val.length}
        <br />
        length of string2 : {val1.length}
        </>
        );
    
}
