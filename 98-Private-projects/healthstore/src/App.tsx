import './App.scss';

//components
import Card from './view/components/card/Card';

const row1:Array<Image> = [
  {name:'תוספי תזונה', img:'data:image/jpeg;base64,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'}
  ,{name:"קוסמטיקה טבעית",img:"data:image/jpeg;base64,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"}
  ,{name:"מוצרים ללא סוכר",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBpBVaUjqCqZdmHuxgRjK2GeMXk2lB2_DUjA&usqp=CAU"}
];

const row2:Array<Image> = [
  {name:"כוסות רוח",img:"data:image/jpeg;base64,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"},
  {name:"נרות הופי לאוזניים",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXH4MMKrO4lrdnPOI20nQ7oB5m7KrDpHmOvA&usqp=CAU"},
  {name:"טיפול פנים",img:"http://yofikoren.co.il/wp-content/uploads/2013/01/%D7%98%D7%99%D7%A4%D7%95%D7%9C%D7%99-%D7%A4%D7%A0%D7%99%D7%9D-2.jpg"}

];



interface Image{
  name:string;
  img:string;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div><h1 className="text">Welcome to Our HealthStore</h1></div>
        <div className="row">
        <h3 className="text"> מוצרים</h3>
        {row1.map((item, index)=>{
          const {name, img} = item; //deconstractor 
          return <Card key={index} info={{name, img}}/>
        })}
        </div>
        <div className="row">
        <h3 className="text"> טיפולים</h3>
        {row2.map((item, index)=>{
          const {name, img} = item; //deconstractor 
          return <Card key={index} info={{name, img}}/>
        })}
        </div>
      </header>
    </div>
  );
}

export default App;