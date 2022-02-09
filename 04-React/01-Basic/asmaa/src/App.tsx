import './App.scss';

//components
import Card from './view/components/card/Card';

const students:Array<Place> = [{name:'image', img:'https://www.google.com/search?q=image&rlz=1C1CHZL_iwIL684IL684&tbm=isch&source=iu&ictx=1&vet=1&fir=gxFxsvFBmxeZ9M%252C0JWe7yDOKrVFAM%252C_%253BqXynBYpZpHkhWM%252C4O2GvGuD-Cf09M%252C_%253B2DNOEjVi-CBaYM%252CAOz9-XMe1ixZJM%252C_%253Bz4_uU0QB2pe-SM%252C7SySw5zvOgPYAM%252C_%253Bl5RllJHFLw5NyM%252CLOSptVP0p_ZwUM%252C_%253BA4G7eW2zetaunM%252Cl3NoP295SYrYvM%252C_%253BMOAYgJU89sFKnM%252CygIoihldBPn-LM%252C_%253BsmRkxzhk74wASM%252CbUbrhOtxELp8CM%252C_%253BxE4uU8uoFN00aM%252CpEU77tdqT8sGCM%252C_%253ByocyzzP8XUOX9M%252CwyFabbiXOEkYkM%252C_%253BgOUAFhrbQ2nYQM%252COXvyXJop1qSGqM%252C_%253B1Y5Fex7Bw6VMkM%252CYAMnwpTKFlPEWM%252C_%253BDH7p1w2o_fIU8M%252CBa_eiczVaD9-zM%252C_&usg=AI4_-kQzNepFrtB37WmG27iG-L__prm5iQ&sa=X&ved=2ahUKEwjOzIrImfL1AhWHfMAKHQCtDI4Q9QF6BAgSEAE#imgrc=2DNOEjVi-CBaYM'}];
interface Place{
  name:string;
  img:string
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
      {students.map((student, index)=>{
         const {name, img} = student; 
        return <Card  info={{name, img}} />
      })}
      </header>
    </div>
  );
}

export default App;
