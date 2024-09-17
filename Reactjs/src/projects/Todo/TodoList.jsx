import { MdCheck, MdDeleteForever } from "react-icons/md";

export const TodoList = ({ data, handleDeleteTodo }) => { // Destructure props correctly
  return (
    <li className="todo-item">
      <span>{data}</span>
      <button className="check-btn">
        <MdCheck />
      </button>
      <button
        className="delete-btn"
        onClick={() => handleDeleteTodo(data)} // Ensure the correct function is called
      >
        <MdDeleteForever />
      </button>
    </li>
  );
};
