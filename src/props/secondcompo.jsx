import ThirdCompo from "./thirdcompo";

const SecondCompo= (props) =>{
  let shape = "triangle"
  return(
    <>
    <h1>Using props from the firs compo. Teacher name is {props.myForm}</h1>
    <ThirdCompo newShape = {shape}/>
    </>
  );
}
export default SecondCompo;

