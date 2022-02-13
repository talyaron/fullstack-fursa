interface MessagesProp{
    message: string;
 }
 

function Messages(prop:MessagesProp){
    const {message} = prop;
    
    return(
        <div>
            {message}
        </div>
    );
}

export default Messages;