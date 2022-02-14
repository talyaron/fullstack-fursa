import { useState } from "react";

interface texinput{
    setTextArray:any;
    textArray:Array<string>;
}
function Textinput(prop:texinput){
    const {setTextArray,textArray} = prop;

    let [mytext, setmytext] = useState('');
    function moveInput(e: any) {
        try {
            setmytext(e.target.value)
        } catch (error) {
            console.error(error)
        }
        

        
    }
    function addToArray(){
        
        setTextArray([...textArray, mytext]);
       
       
      }
      return (<><input type="text" onKeyUp={moveInput}></input><button onClick={addToArray}>add text</button></>)

}
export default Textinput;