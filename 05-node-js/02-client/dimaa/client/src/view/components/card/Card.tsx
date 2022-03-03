import { randomInt } from "crypto";
import { useState } from "react";

interface CardProp {
    info: {
        link: string;
        title: string;
    }
}

function Card(prop: CardProp) {
    const { link, title } = prop.info;
    const textArr:Array<string> = ["image1","image2","image3","image4"];
    
    const [text, setText] = useState("title");

    function HandleClick(ev: any) {
        let randomValue = textArr[Math.floor(Math.random() * textArr.length)];
        setText(randomValue);
    }

    const [inputText, setInputText] = useState("Input Text");

    function HandleText(ev:any){
        try{
            setInputText(ev.target.value);
        }catch(err){
            console.error(err);
        }
    }

    return (
        <div className="card">
            <img src={link} />
            <h3>{text}</h3>
            <button onClick={HandleClick}>Change title</button>

            <div>{inputText}</div>
            <input type="text" onInput={HandleText}/>
        </div>
    );
}

export default Card;