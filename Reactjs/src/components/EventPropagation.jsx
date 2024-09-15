import "./Ev.css";

export const EventPropagation =()=>{
      const handleGrandParent=()=>{
            console.log("child");
      };
      const handleParentClick=()=>{
            console.log("parent");
      };
      const handleChildClick=(event)=>{
            console.log(event)
            event.stopPropagation();
            console.log("parentchild");
      };
      return(
            <section className="main-div">
                  <div className="g-div" onClickCapture={handleGrandParent}>
                        <div className="g-div" onClickCapture={handleParentClick}>
                              <button className="p-div" onClickCapture={handleChildClick}> Child Div </button>
                        </div>

                  </div>
            </section>
      );
};