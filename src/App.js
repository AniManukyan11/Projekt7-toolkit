 import { useState } from "react";

 import "./App.css";

 import TodoItem from "./components/TodoItem.js";
 import { useSelector, useDispatch } from "react-redux";
 import { addTodo, removeTodo } from "./features/counter/todoSlice";

 function App() {
   const [input, setInput] = useState("");

   const todos = useSelector((state) => state.todo.todos);
   const dispatch = useDispatch();

   const handleAddTodo = (e) => {
     e.preventDefault();
     if (input.trim()){ dispatch(addTodo(input));}
    
   };

   const handleTodoDone = (id) => {
     dispatch(removeTodo(id));
   };
   return (
     <div className="to-do ">
       <h1>TODO List</h1>
       <form className="App-form" onSubmit={handleAddTodo}>
         <input type="text" onInput={(e) => setInput(e.target.value)} />
         <button className="plus"type="submit">+</button>
       </form>
       <div className="todos">
         { todos.map((todo) => (
             <TodoItem
               key={todo.id}
               text={todo.text}
               id={todo.id}
               onCheck={handleTodoDone}
             />
           ))}
        
       </div>
     </div>
   );
 }

 export default App;
