import './User.scss';
import Bagemenu from '../../components/menuBar/menu';
import Profile from '../../components/profile/Profile';
import Recipes from '../../components/recipes/Recipes';

const userInfo:Array<info> = [{name:"Dima Abbas",phone:"0525041028",email:"dimaabbas25@gmail.com"}];

interface info{
  name:string;
  phone:string;
  email:string;
}

export default function User(){
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