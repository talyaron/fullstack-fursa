import Texting from "./Texting"

interface TextAre{
    array:Array<string>
}
function TextAre(prop:TextAre)
{
    
    return (<div >
        {prop.array.map((item, index)=>{
          return <Texting key={index} text ={item}></Texting>
        })}

      </div>)
    
}
export default TextAre;