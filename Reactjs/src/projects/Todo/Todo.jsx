import { useEffect, useState } from "react";
import "./Todo.css";
import { MdCheck } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";

export const Todo = () => {
  const [InputValue, setInputValue] = useState("");
  const [task, setTask] = useState([]);
  const [dateTime, setdateTime] = useState("");

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!InputValue) return;
    if (task.includes(InputValue)) {
      setInputValue("");
      return;
    }

    setTask((prevTask) => [...prevTask, InputValue]);
    setInputValue(""); // Clear input after adding
  };

  // todo date and time
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString();
      const formattedTime = now.toLocaleTimeString();
      setdateTime(`${formattedDate} - ${formattedTime}`);
    }, 1000);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  const handleDeleteTodo = (value) => {
    const updatedTask = task.filter((curTask) => curTask !== value);
    setTask(updatedTask);
  };
  const handleClearTodoData =()=>{

      setTask([]);
  }

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <h2 className="date-time">{dateTime}</h2>
      </header>
      <section className="form">
        <form onSubmit={handleFormSubmit}>
          <div>
            <input
              type="text"
              className="todo-input"
              autoComplete="off"
              value={InputValue}
              onChange={(event) => handleInputChange(event.target.value)}
            />
          </div>
          <div>
            <button type="submit" className="todo-btn">
              Add Task
            </button>
          </div>
        </form>
      </section>
      <section className="unOrderList">
        <ul>
          {task.map((curTask, index) => (
            <li key={index} className="todo-item">
              <span>{curTask}</span>
              <button className="check-btn">
                <MdCheck />
              </button>
              <button
                className="delete-btn"
                onClick={() => handleDeleteTodo(curTask)} // Corrected the delete function
              >
                <MdDeleteForever />
              </button>
            </li>
          ))}
        </ul>
      </section>
      <section>
            <button className="clear-btn" onClick={handleClearTodoData}>Clear All</button>
      </section>
    </section>
  );
};
