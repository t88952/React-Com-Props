
import ThirdCompo from "./thirdcompo";

// Define the functional component
const SecondCompo = (props) => {
    let secondform = 'Raza';
    return (
      <>
        <h1>city of light</h1>
        <h2>shape is </h2>
        <ThirdCompo secondform = {props.myform}/>
      </>
    );
  }
  
  // Export the component as default
  export default SecondCompo;

  