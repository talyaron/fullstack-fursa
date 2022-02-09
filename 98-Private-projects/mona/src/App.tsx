import './App.scss';

//components
import Card from './view/components/card/Card';
import Wood from './view/components/wood/Wood';
import Product from './view/components/products/Products';
import { logDOM } from '@testing-library/react';

const woods:Array<wood> = [{name:'pine wood',height:70,width:70, thick:70,cardImg:'https://d2kxk2c617i0nn.cloudfront.net/image_resize/crop/mw1500/mh750/products/23_001--yellow_pine_softwood-s.jpg'},
{name:'insulation wood',height:70,width:70, thick:70,cardImg:'https://www.greenspec.co.uk/images/web/materials/boards/board.jpg'},
{name:'multiLayer wood',height:70,width:70, thick:70,cardImg:'data:image/jpeg;base64,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'}];
interface wood{
  name:string;
  width:number;
  height:number;
  thick:number;
  cardImg:string;
}
const woodLogo:string="https://cdn2.iconfinder.com/data/icons/lightly-icons/30/search-480.png";
function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <img  src="https://cdn3.iconfinder.com/data/icons/farming-gardening-2/512/firewood-wood-farm-farming-512.png" alt="" />
        <h1>Wood Raw Material</h1>
        <img src="https://cdn4.iconfinder.com/data/icons/shopping-21/64/shopping-06-512.png" alt="" />
      </header>
      
      <body className="App-body">
      <Wood title={woodLogo} ></Wood>
      {woods.map((wood, index)=>{
        const{name,width,height,thick,cardImg}=wood;
        return <Card key={index} wood={{name,width,height,thick,cardImg}}/>
        
      })}
            

      </body>
    
    </div>
  );
}

export default App;
