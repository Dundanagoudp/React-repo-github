import "./EV.css";

export const EventHandling = () =>{

//      function handleButtonClick (){
// alert("hey iam click on event");
//      }

const handleButtonClick = (event)=>{
      console.log(event);
      console.log(event.target);
      console.log(event.type);
      alert("hey iam click on event");
};

const handleWelcomeuser =(user)=>{
      console.log(`hey ${user} iam click on event`);
};
     return(
<>
<button onClick={handleButtonClick}>click me</button>
<br/>
<button onClick={(event)=>handleButtonClick(event)}>click me 2</button>
<br/>
{/* inline event handlers */}
<button onClick={(event)=>console.log(event)}>inline events</button>
<br/>
{/* inline arrow fuction */}
<button onClick={()=>alert("hey iam click on event")}>inline arrow events</button>
<br/>
{/* passing  arguments  to event handlers */}
{/* <button onClick={handleWelcomeuser("chetan")}>event handlers</button> */}

<button onClick={()=>handleWelcomeuser("chetan")}>event handlers</button>
<button onClick={()=>handleWelcomeuser("chetan")}>event handlers</button>

</>
      );
};

