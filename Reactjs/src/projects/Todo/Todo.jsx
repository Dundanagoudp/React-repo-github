import { useState } from "react";
import "./Todo.css";
import { MdCheck } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";


export const Todo=()=>{
      const [InputValue,setInputValue] = useState("");
      const[task,setTask] = useState([]);

      const handleInputChange =(value)=>{
            setInputValue(value);
      };
      const handleFormSubmit=(event)=>{
            event.preventDefault();

            if(!InputValue) return;
            if(task.includes(InputValue)) {
                  setInputValue("");
                  return;
            };

            
            setTask((prevTask) => [...prevTask, InputValue]);

           
      };

     
      return(
 <section className="todo-container">
<header>
      <h1>Todo List</h1>
</header>
<section className="form">
   <form onSubmit={handleFormSubmit}>
      <div>
            <input 
            type="text" 
            className="todo-input" 
            autoComplete="off" value={InputValue} 
            onChange={(event)=> handleInputChange(event.target.value)}/>
      </div>
      <div>
            <button type="submit" className="todo-btn">add task</button>
      </div>
   </form>
</section>
<section className="unOrderList">
<ul>
      {
            task.map((curTask,index) =>{
                  return <li key={index} className="todo-item">
                        <span>{curTask}</span>
                        <button className="check-btn">
                              <MdCheck />
                        </button>
                        <button className="delete-btn">
                               <MdDeleteForever />
                        </button>

                  </li>
            }
      )
      };
</ul>
</section>
 </section>
      );
};