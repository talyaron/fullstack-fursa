import { useState } from "react";
import { isPropertySignature } from "typescript";

interface Box {
    prop:{
        name: string
        teacher: string
    };
    
}

function ClassBox(classProp:Box) {
    const {name, teacher} = classProp.prop
    const [boxColor, setBoxColor] = useState('#faf1e7a2');
    const [boxSize, setBoxSize] = useState(150)

    function handleBoxClick(){
        if (boxColor == '#faf1e7a2'){
            setBoxColor('#f0c89e');
        }
        if (boxColor == '#f0c89e'){
            setBoxColor('#faf1e7a2');
        }
        if (boxSize == 150){
            setBoxSize(200);
        }
        if (boxSize == 200){
            setBoxSize(150);
        }
    }
    return(
        
        <div className="classBox" onClick={handleBoxClick} style = {{backgroundColor:boxColor, width:boxSize, height:boxSize}}>
            <h4>{name}</h4>
            <p>{teacher}</p>
        </div>

    );
}

export default ClassBox;