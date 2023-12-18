import SecondCompo from "./secondcompo";

// Define the functional component
const FirstCompo = () => {
    let form = 'Triangle'
    return (
      <>
        <h2>Hello world</h2>
       <SecondCompo myform = {form} />
      </>
    );
  }
  
  // Export the component as default
  export default FirstCompo;
