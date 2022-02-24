import './Card.scss';
import{useState} from'react';

interface item{
    info:{
        url: string;
        name: string;
    }
  }

function Card(props:item) {
    const [color,SetColor]=useState("#385c78");
    const [names,Setname2]=useState("Elias");
    const names2=["a","b","c","d","E","f"];
    const [inputText, setInputText] = useState("Input Text");

   
    const {url,name}=props.info;
    function handleSubmit(e: any) {
        e.preventDefault();
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        SetColor(color);
    }
    function changename(e: any) {
        e.preventDefault();
         var nameInArr = names2[Math.floor(Math.random()*names2.length)];

        Setname2(nameInArr);
    }
    function HandleText(ev:any){
        try{
            setInputText(ev.target.value);
        }catch(err){
            console.error(err);
        }
    }
    return (
        <div className="card" style={{backgroundColor:color}}>
            <img className='imgHeader' src={url}  />
            <p className='content'>
            <h2>{name}</h2>
            </p>
            <h1>{names}</h1>
            <div>{inputText}</div>
            <input type="text" onInput={HandleText}/>
            <form onSubmit={changename}>
                <button className='buyButton' type="submit">change name</button>
            </form>
            <form onSubmit={handleSubmit}>
                <button className='buyButton' type="submit">change color</button>
            </form>
        </div>
    );
}

export default Card;