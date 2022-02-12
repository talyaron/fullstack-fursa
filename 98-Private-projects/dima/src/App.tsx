import './App.scss';

//components
import Bagemenu from './view/menuBar/menu';
import Profile from './view/profile/Profile';
import Recipes from './view/recipes/Recipes';

const userInfo:Array<info> = [{name:"Dima Abbas",phone:"0525041028",email:"dimaabbas25@gmail.com"}];

interface info{
  name:string;
  phone:string;
  email:string;
}

function App() {
  return (
    <div className="App">
      <div className="wrapper1">
        <Bagemenu />
      </div>
      <div className="wrapper2"> 
        <div className="profile">
          {userInfo.map((user, index) => {
            const{name,phone,email} = user
            return <Profile key={index} info={{name,phone,email}}/>})}
        </div>
        <div className="recipes">
          <Recipes />
        </div>
      </div>
    </div>
  );
}

export default App;
