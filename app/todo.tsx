
"use client";

import { useState } from "react";


export default function Todo()
{
    const [todo,setTodo]=useState("");
   const[todos,setTodos]=useState([
    {todoText:"todo 1",completed:false},
    {todoText:"todo 2",completed:true},
    {todoText:"todo 3",completed:true},
    {todoText:"todo 4",completed:false},
]);
    const onClickHandler=(myElm:any)=>{
      
        console.log("myElm",myElm);

    
const newTodos=todos.map((todo)=>{
    console.log("todo:",todo);
    if(todo.todoText==myElm.todoText){
        todo.completed=!todo.completed
    }
    return todo;
});

console.log(newTodos);
setTodos(newTodos)
};

const addTodo=()=>{
const newTodo={todoText:todo,completed:false};
const newTodos=[...todos,newTodo];
setTodos(newTodos);
setTodo("");
};

const deleteTodo=(myTodo:any)=>{
    const newTodos=todos.filter((todo)=>{
        if(todo.todoText==myTodo.todoText) return false;
    
        return true;

    });
    console.log("old todos",todos,"newe todos",newTodos);
setTodos(newTodos);
};

return (
    <><div className="bg-blue-200">
    <div className="flex justify-center bg-blue-500 font-black text-4xl text-blue-100 m-8 p-8">TodoApp</div>
    
    <div className="flex justify-center">
    <input className=" flex justify-center bg-blue-300 text-2xl text-blue-900 p-2 m-4" placeholder="add todo text"
    value={todo}
    onChange={(e)=>{
        setTodo(e.target.value);
    }}
 /> </div>
 <div className="flex justify-center">  
   <button className=" flex justify-center bg-blue-500 font-black text-3xl text-blue-100 rounded-full p-3 m-4" onClick={addTodo}>Add Todo`s</button>

     </div>
<div className="flex">   <ul>
    {todos.map((elm)=>{
        return(
            <li 
            style={{
                color:elm.completed?"green":"red",
                fontStyle:"oblique",
                listStyle:"none",

            }}
            key={
                elm.todoText
            }>

<input
type="checkbox"
checked={elm.completed}
onChange={()=>{
onClickHandler(elm);
}}
/>
{elm.todoText}

<button className=" bg-blue-500 text-bold text-blue-100 rounded-full p-2 m-4" onClick={()=>{deleteTodo(elm)}}>{" "}Delete To Do`s</button>
  </li>
                );
  }  )}
   </ul>
 </div>  </div>   </>
);
}