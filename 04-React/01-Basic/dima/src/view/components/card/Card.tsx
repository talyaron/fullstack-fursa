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

    return (
        <div className="card">
            <img src={link} />
            <h3>{text}</h3>
            <button onClick={HandleClick}>Change title</button>
        </div>
    );
}

export default Card;