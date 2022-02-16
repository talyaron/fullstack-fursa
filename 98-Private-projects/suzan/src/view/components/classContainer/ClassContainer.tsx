import { isPropertySignature } from "typescript";
import ClassBox from "../classBox/ClassBox";

interface ClassRoom{
    name:string;
    teacher:string;
}

const arr = [{name:'class 1A', teacher:'Suzan Kassabry'}, {name:'class 1B', teacher:'Suzan Kassabry'},
{name:'class 2A', teacher:'Suzan Kassabry'}, {name:'class 2B', teacher:'Suzan Kassabry'},
{name:'class 3A', teacher:'Suzan Kassabry'}, {name:'class 3B', teacher:'Suzan Kassabry'}, 
{name:'class 4A', teacher:'Suzan Kassabry'}, {name:'class 4B', teacher:'Suzan Kassabry'}];

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