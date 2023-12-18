import SecondCompo from "./secondcompo";

const FirstCompo = () =>{

 let form = "Hadi raza"
  return(
    <>
    <h1>Learning components with props</h1>
    <SecondCompo myForm = {form}/>
    </>
  );
}

export default FirstCompo;