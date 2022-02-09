import { isPropertySignature } from "typescript";

interface Box {
    prop:{
        name: string
        teacher: string
    };
    
}

function ClassBox(classProp:Box) {
    const {name, teacher} = classProp.prop
    return(
        
        <div className="classBox">
            <h4>{name}</h4>
            <p>{teacher}</p>
        </div>

    );
}

export default ClassBox;