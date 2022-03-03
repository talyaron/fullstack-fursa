import {useParams} from 'react-router-dom';

const bar = [{title:'Home',id:'1'},{title:'Our Programs',id:'2'},{title:'About us',id:'3'},{title:'Staff',id:'4'}];

const Barr = () => {
  const {id} = useParams();
 
  function getTabName(id:string|undefined,Bar:Array<any>):string {
    const product =  Bar.find(product=> product.id == id)
    if(product){
      return product.title
    } else {
      return ''
    }
  }

  return (
    <div className= "badge bg-primary text-wrap">
      <h1> {getTabName(id,bar)} </h1>

      </div>
  )
}

export default Barr