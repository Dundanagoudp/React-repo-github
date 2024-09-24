import { forwardRef, useRef, useId } from "react";

import "./index.css";

export const ForwardRefs = () => {
  const username = useRef(null);
  const password = useRef(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(username.current.value, password.current.value);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <BeforeReact19Input label="Username" ref={username} />
      <BeforeReact19Input label="Password" ref={password} />
      <button type="submit">Submit</button>
    </form>
  );
};

// BeforeReact19Input component
// const BeforeReact19Input = forwardRef((props, ref) => {
//   const id = useId(); // Generates a unique ID

//   return (
//     <div>
//       <label htmlFor={id}>{props.label}</label>
//       <input id={id} type="text" ref={ref} />
//     </div>
//   );
// });

// afterreact19

const BeforeReact19Input = ({label,ref}) => {
      const id = useId(); // Generates a unique ID
    
      return (
        <div>
          <label htmlFor={id}>{label}</label>
          <input id={id} type="text" ref={ref} />
        </div>
      );
    };