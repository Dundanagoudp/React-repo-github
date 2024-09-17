import { useState } from "react";
import "./Todo.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";

export const Todo = () => {
  const [tasks, setTasks] = useState([]);


  const handleFormSubmit = (inputValue) => {
    if (!inputValue.trim()) return; // Check for empty or whitespace input
    if (tasks.includes(inputValue.trim())) return; // Check for duplicate tasks

    setTasks((prevTasks) => [...prevTasks, inputValue.trim()]);
  };

  const handleDeleteTodo = (value) => {
    const updatedTasks = tasks.filter((task) => task !== value);
    setTasks(updatedTasks);
  };

  const handleClearTodoData = () => {
    setTasks([]);
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
    key={index} // Use `key` here, not in the TodoList component
    data={task}
    handleDeleteTodo={handleDeleteTodo}
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
