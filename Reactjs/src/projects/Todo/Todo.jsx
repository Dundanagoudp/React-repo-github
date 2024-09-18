// import { useState } from "react";
// import "./Todo.css";
// import { TodoForm } from "./TodoForm";
// import { TodoList } from "./TodoList";
// import { TodoDate } from "./TodoDate";

// const todoskey = "reactTodo";

// export const Todo = () => {
//   const [tasks, setTasks] = useState(()=>{
//     const rawTodo = localStorage.getItem(todoskey);
//     if(!rawTodo) return[];
//     return JSON.parse(rawTodo);
//   });

//   const handleFormSubmit = (inputValue) => {
//     if (!inputValue.trim()) return; // Check for empty or whitespace input

//     // Check if task content already exists
//     if (tasks.some((task) => task.content === inputValue.trim())) return;

//     // Add new task as an object with 'content' and 'checked' properties
//     setTasks((prevTasks) => [
//       ...prevTasks,
//       { content: inputValue.trim(), checked: false }
//     ]);
//   };

//   const handleDeleteTodo = (value) => {
//     const updatedTasks = tasks.filter((task) => task.content !== value);
//     setTasks(updatedTasks);
//   };

//   // to localstorage data 
// localStorage.setItem("reactTodo", JSON.stringify(todoskey))

//   // Corrected handleCheckedTodo function
//   const handleCheckedTodo = (taskContent) => {
//     const updatedTasks = tasks.map((curTask) =>
//       curTask.content === taskContent
//         ? { ...curTask, checked: !curTask.checked } // Toggle the checked property
//         : curTask
//     );
//     setTasks(updatedTasks);
//   };

//   const handleClearTodoData = () => {
//     setTasks([]);
//   };

//   return (
//     <section className="todo-container">
//       <header>
//         <h1>Todo List</h1>
//         <TodoDate />
//       </header>
//       <TodoForm onAddTodo={handleFormSubmit} />
//       <section className="unOrderList">
//         <ul>
//           {tasks.map((task, index) => (
//             <TodoList
//               key={index}
//               data={task.content}
//               checked={task.checked}
//               handleDeleteTodo={handleDeleteTodo}
//               onHandleCheckedTodo={handleCheckedTodo}
//             />
//           ))}
//         </ul>
//       </section>
//       <section>
//         <button className="clear-btn" onClick={handleClearTodoData}>
//           Clear All
//         </button>
//       </section>
//     </section>
//   );
// };


import { useState } from "react";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";
import "./Todo.css";

export const Todo = () => {
  const [tasks, setTasks] = useState([]);

  const handleFormSubmit = (inputValue) => {
    if (!inputValue.trim()) return;
    if (tasks.some((task) => task.content === inputValue.trim())) return;
    setTasks((prevTasks) => [
      ...prevTasks,
      { content: inputValue.trim(), checked: false },
    ]);
  };

  const handleDeleteTodo = (value) => {
    const updatedTasks = tasks.filter((task) => task.content !== value);
    setTasks(updatedTasks);
  };

  const handleCheckedTodo = (taskContent) => {
    const updatedTasks = tasks.map((task) =>
      task.content === taskContent ? { ...task, checked: !task.checked } : task
    );
    setTasks(updatedTasks);
  };

  // Add Clear All functionality here
  const handleClearTodoData = () => {
    setTasks([]); // Clear all tasks
  };

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <TodoDate />
      </header>
      <TodoForm onAddTodo={handleFormSubmit} />
      <section className="unOrderList">
        <ul>
          {tasks.map((task, index) => (
            <TodoList
              key={index}
              data={task.content}
              checked={task.checked}
              handleDeleteTodo={handleDeleteTodo}
              onHandleCheckedTodo={handleCheckedTodo}
            />
          ))}
        </ul>
      </section>
      <section>
        <button className="clear-btn" onClick={handleClearTodoData}>
          Clear All
        </button>
      </section>
    </section>
  );
};
