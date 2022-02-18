import './User.scss';
import Bagemenu from '../../components/menuBar/menu';
import Profile from '../../components/profile/Profile';
import Recipes from '../../components/recipes/Recipes';

const userInfo: Array<info> = [{ name: "Dima Abbas", phone: "0525041028", email: "dimaabbas25@gmail.com" }];

interface info {
  name: string;
  phone: string;
  email: string;
}

export default function User() {
  return (
    <div className="User">
      <div className="wrapper1">
        <Bagemenu />
      </div>
      <div className="wrapper2">
        <img className="image" src="https://img.freepik.com/free-photo/purple-marble-texture-natural-pattern-with-high-resolution-background-design-art-work_38607-277.jpg?w=996" alt="" />
        <div className='content'>
          <div className="profile">
            {userInfo.map((user, index) => {
              const { name, phone, email } = user
              return <Profile key={index} info={{ name, phone, email }} />
            })}
          </div>
          <div className="recipes">
            <Recipes />
          </div>
        </div>
      </div>
    </div>
  );
}