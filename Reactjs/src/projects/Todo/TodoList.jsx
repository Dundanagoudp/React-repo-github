// import { MdCheck, MdDeleteForever } from "react-icons/md";

// export const TodoList = ({ 
//   data, 
//   checked,
//   handleDeleteTodo,
//   onHandleCheckedTodo 
// }) => { // Destructure props correctly
//   return (
//     <li className="todo-item">
//       <span className={checked ? "checkList":"notCheckList"}>{data}</span>
//       <button className="check-btn" onClick={()=> onHandleCheckedTodo(data)}>
//         <MdCheck />
//       </button>
//       <button
//         className="delete-btn"
//         onClick={() => handleDeleteTodo(data)} // Ensure the correct function is called
//       >
//         <MdDeleteForever />
//       </button>
//     </li>
//   );
// };
import { MdCheck, MdDeleteForever } from "react-icons/md";

export const TodoList = ({ data, checked, handleDeleteTodo, onHandleCheckedTodo }) => {
  return (
    <li className="todo-item">
      <span className={checked ? "checkList" : "notCheckList"}>{data}</span>
      <button className="check-btn" onClick={() => onHandleCheckedTodo(data)}>
        <MdCheck />
      </button>
      <button className="delete-btn" onClick={() => handleDeleteTodo(data)}>
        <MdDeleteForever />
      </button>
    </li>
  );
};
