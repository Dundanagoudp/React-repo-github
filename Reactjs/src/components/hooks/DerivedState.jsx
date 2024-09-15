const users = [
      { name:"akash", age:"23"},
      { name:"mallu", age:"26"},
      { name:"nitin", age:"28"},
      { name:"rakesh", age:"30"},

]

export const DerivedState =()=>{
      return(
<div className="main-div">
<h1> users lists</h1>
<ul>
  {
      users.map((CurEle, index)=>{
            return<>
            <li>
                  
            </li>
            </>
      }
)
  }
 
</ul>
</div>
      );
};