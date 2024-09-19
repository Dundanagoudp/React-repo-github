
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
