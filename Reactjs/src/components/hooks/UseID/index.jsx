import { useId } from "react"; 

export const UseID = () => {
//   const usernameId = useId();
//   const emailId = useId(); 
//   const passwordId=useId();

//   return (
//     <form>
//       <div>
//         <label htmlFor={usernameId}>Username:</label>
//         <input type="text" id={usernameId} name="name" />
//       </div>
//       <div>
//         <label htmlFor={passwordId}>passwordId:</label>
//         <input type="password" id={passwordId} name="password" />
//       </div>
//       <div>
//         <label htmlFor={emailId}>Email:</label>
//         <input type="text" id={emailId} name="Email" />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );



const id = useId();
 

  return (
    <form>
      <div>
        <label htmlFor={id + "usernameId"}>Username:</label>
        <input type="text" id={id + "usernameId"} name="name" />
      </div>
      <div>
        <label htmlFor={id + "passwordId"}>passwordId:</label>
        <input type="password" id={id +"passwordId"} name="password" />
      </div>
      <div>
        <label htmlFor={id + "emailId"}>Email:</label>
        <input type="text" id={id + "emailId"} name="Email" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );

};
