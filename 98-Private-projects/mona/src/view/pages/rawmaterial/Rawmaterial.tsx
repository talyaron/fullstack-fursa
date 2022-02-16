import Wood from '../../components/wood/Wood';
import Card ,{CardProp}from '../../components/card/Card';
import "./Rawmaterial.scss";


const woods = [{name:'pine wood',height:70,width:70, thick:70,cardImg:'https://d2kxk2c617i0nn.cloudfront.net/image_resize/crop/mw1500/mh750/products/23_001--yellow_pine_softwood-s.jpg'},
{name:'insulation wood',height:70,width:70, thick:70,cardImg:'https://www.greenspec.co.uk/images/web/materials/boards/board.jpg'},
{name:'multiLayer wood',height:70,width:70, thick:70,cardImg:'https://user-assets.sxlcdn.com/images/609056/FkbWNKuLffuq6lYY2qFlQ5bAGYJY.jpg?imageMogr2/strip/auto-orient/thumbnail/1200x9000%3E/quality/90!/interlace/1/format/jpg'}];
const woodLogo:string="https://cdn2.iconfinder.com/data/icons/lightly-icons/30/search-480.png";

function Rawmaterial(){
    return(
        <div className="RawMaterial">
        <header className='RawMaterial-header'>
          <img  src="https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.6435-9/191373428_5543723205668752_6758159996168278797_n.png?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=vD2Ck1UqS_MAX-yTblw&_nc_ht=scontent.fhfa2-2.fna&oh=00_AT-kafBKJB3bLHogSgPEVUQQtAHgClIHTT0FGy07h8nZTA&oe=622CF120" alt="" />
          <h1 >Wood Raw Material</h1>
          <img src="https://cdn4.iconfinder.com/data/icons/shopping-21/64/shopping-06-512.png" alt="" />
        </header>
        <div className='searching'>
        <Wood title={woodLogo} ></Wood>
        </div>
        <div className="RawMaterial-body">
        
        {woods.map((wood, index)=>{
          const{name,width,height,thick,cardImg}=wood;
          return <Card key={index} wood={{name,width,height,thick,cardImg}}/>
          
        })}
              
  
        </div>
      
      </div>
    );

}
export default Rawmaterial

