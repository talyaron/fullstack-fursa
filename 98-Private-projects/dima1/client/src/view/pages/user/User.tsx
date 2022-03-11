import './User.scss';
import Bagemenu from '../../components/menuBar/menu';
import Profile from '../../components/profile/Profile';
import Recipes from '../../components/recipes/Recipes';
import background from '../../images/background.jpg';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { useParams } from 'react-router-dom';
import { getUserAsync, user } from '../../../app/reducers/userReducer';
import { useEffect } from 'react';

const userInfo: Array<info> = [{ name: "Dima Abbas", phone: "0525041028", email: "dimaabbas25@gmail.com" }];

interface info {
  name: string;
  phone: string;
  email: string;
}

export default function User() {

  const { userName } = useParams();
  console.log(userName)

  const dispatch = useAppDispatch();
  const user_ = useAppSelector(user);
  console.log(user_)

  useEffect (() => {
    dispatch(getUserAsync(userName))
  }, [])
  
  return (
    <div className="User">
      <div className="wrapper1">
        <Bagemenu userName={userName}/>
      </div>
      <div className="wrapper2">
        <img className="image" src={background} alt="" />
        <div className='content'>
          <div className="profile">
            <Profile userInfo={user_} />
          </div>
          <div className="recipes">
            <Recipes />
          </div>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
}
