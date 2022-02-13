import { useState } from "react";

interface texinput{
    setTextArray ?:any;
    arr:Array<string>;
}
function Textinput(prop:texinput){
    let [mytext, setmytext] = useState('');
    function moveInput(e: any) {
        try {
            setmytext(e.target.value)
        } catch (error) {
            console.error(error)
        }
        

        
    }
    function addToArray(){
        
        let tmp = prop.arr;
        tmp.push(mytext);
        prop.setTextArray(tmp);
        console.log(tmp);
      }
      return (<><input type="text" onKeyUp={moveInput}></input><button onClick={addToArray}>add text</button></>)

}
export default Textinput;