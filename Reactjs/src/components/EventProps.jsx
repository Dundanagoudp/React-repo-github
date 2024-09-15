
export const EventProps=()=>{

      const handWelcomeuser=(user)=>{
            alert(`hey iam ${user} `);
      };

      const handleHover=()=>{
            alert("hey iam chetan ")
      };

      return(
            <>
            <WelcomeUser onClick={()=> handWelcomeuser("chetan")} onMouseEnter={handleHover} />
            </>
      );
};

const WelcomeUser =(props)=>{

      // destucrting 
    const {onClick,onMouseEnter}=props;
    
    const handleGreting=()=>{
            console.log(`hey use welcome`);
            onClick();
      };
      return(
<>
<button onClick={onClick}>click me</button>
<button onMouseEnter={onMouseEnter}>click me on hover</button>
<button onClick={handleGreting}>click me mouse hover</button>
</>
      );
};