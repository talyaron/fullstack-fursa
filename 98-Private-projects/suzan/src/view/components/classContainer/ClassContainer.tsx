import { isPropertySignature } from "typescript";
import ClassBox from "../classBox/ClassBox";

interface ClassRoom{
    name:string;
    teacher:string;
}

const arr = [{name:'class 1A', teacher:'Suzan Kassabry'}, {name:'class 1A', teacher:'Suzan Kassabry'},
{name:'class 1A', teacher:'Suzan Kassabry'}, {name:'class 1A', teacher:'Suzan Kassabry'},
{name:'class 1A', teacher:'Suzan Kassabry'}, {name:'class 1A', teacher:'Suzan Kassabry'}, 
{name:'class 1A', teacher:'Suzan Kassabry'}, {name:'class 1A', teacher:'Suzan Kassabry'}];

function ClassContainer() {
    return(
        <div className="classContainer">
            {
                arr.map((classroom, index)=>{
                    const {name, teacher} = classroom;
                    return(
                        <ClassBox key={index} prop={classroom}/>
                    );
                })
            }
        </div>
    );
}

export default ClassContainer;