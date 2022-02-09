interface WoodProp{
    title:string;
}

function Wood(prop:WoodProp){
    return(
    <div className="wood">
        <div className="wood_title">
        <img src={prop.title} alt="" />
        <input type="search" />
        </div>
        <div className="wood_cart">
        
        </div>
        
        </div>
        
      
   
    );
}
export default Wood
