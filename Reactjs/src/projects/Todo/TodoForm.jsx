// import { useState } from "react";

// export const TodoForm = ({ onAddTodo }) => { // Destructure onAddTodo from props
//   const [inputValue, setInputValue] = useState(""); // Renamed to inputValue for clarity

//   const handleInputChange = (event) => { // Event object is passed here
//     setInputValue(event.target.value); // Use event.target.value to get input value
//   };

//   const handleFormSubmit = (event) => {
//     event.preventDefault(); // Prevent the default form submit action
//     if (inputValue.trim()) { // Check if inputValue is not empty or just spaces
//       onAddTodo(inputValue.trim()); // Pass trimmed value to onAddTodo
//       setInputValue(""); // Clear the input field
//     }
//   };

//   return (
//     <section className="form">
//       <form onSubmit={handleFormSubmit}>
//         <div>
//           <input
//             type="text"
//             className="todo-input"
//             autoComplete="off"
//             value={inputValue}
//             onChange={handleInputChange} // Directly pass handleInputChange
//           />
//         </div>
//         <div>
//           <button type="submit" className="todo-btn">
//             Add Task
//           </button>
//         </div>
//       </form>
//     </section>
//   );
// };


import { useState } from "react";

export const TodoForm = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim()) {
      onAddTodo(inputValue.trim());
      setInputValue("");
    }
  };

  return (
    <section className="form">
      <form onSubmit={handleFormSubmit}>
        <div>
          <input
            type="text"
            className="todo-input"
            autoComplete="off"
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button type="submit" className="todo-btn">
            Add Task
          </button>
        </div>
      </form>
    </section>
  );
};
