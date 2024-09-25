
export const ParentComponent = () => {
      return (
        <section
          className="p-4 min-h-screen font-display tracking-wider flex flex-col justify-center items-center bg-gray-900 text-white"
        >
          <h1>Component A</h1>
          <ChildComponent data="React JS" />
        </section>
      );
    };

    const ChildComponent =(props)=>{
      return(
            <>
            <h1> hello iam a componet B</h1>
            <GrandChildComponet data={props.data} />
            </>
      );
    }

    const GrandChildComponet =(props)=>{
      return(
            <>
            <h1> hello iam a componet B</h1>
            <GrandGrandChildComponent data={props.data} />
            </>
      );
    }

    const GrandGrandChildComponent = (props) => {
      return (
        <>
          <h1>Hello, I love {props.data}</h1>
        </>
      );
    };

    