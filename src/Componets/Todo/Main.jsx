import React, { useEffect, useState } from "react";
import { TodoProvider } from "./TodoContext";
import Todoform from "./Todoform";
import Todoitem from "./Todoitem";

const Main = () => {
  const [todos, setTodo] = useState([]);

  const addTodo=(todo)=>{
        setTodo((prev)=>[{id:Date.now(),...todo}, ...prev])
  }
  const updateTodo=(id,todo)=>{
    console.log(id,todo,todos);
   setTodo((prev)=> prev?.map((prevTodo)=>(prevTodo.id===id ? todo:prevTodo))

   )
  }
  const deleteTodo=(id)=>{
    setTodo((prev)=>prev.filter((todo)=>todo.id!==id));
  }
  const toggleComplete=(id)=>{
    setTodo((prev)=>prev.map((todo)=>todo.id===id ? {...todo,completed: !todo.completed}:todo));
  }
  
  useEffect(() => {
    const Todos=JSON.parse(localStorage.getItem("todos"));

    if(Todos && Todos.length>0)
    {
      setTodo(Todos)
    }
    
  }, [])

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])
  

  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete,}}>
      <div className="bg-[#38174d] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-xl rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">{/* Todo form goes here */}
          <Todoform/>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo)=>(
              <div key={todo.id} className="w-full">
                  <Todoitem todo={todo}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
    // <div> hello</div>
  );
};

export default Main;
