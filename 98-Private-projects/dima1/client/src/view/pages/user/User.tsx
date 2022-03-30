import './User.scss';
import Bagemenu from '../../components/menuBar/menu';
import Profile from '../../components/profile/Profile';
import Recipes from '../../components/recipes/Recipes';
import background from '../../images/background.jpg';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { useParams } from 'react-router-dom';
import { getUserAsync, user } from '../../../app/reducers/userReducer';
import { useEffect } from 'react';

interface info {
  name: string;
  phone: string;
  email: string;
}

export default function User() {

  const { userName } = useParams();

  const dispatch = useAppDispatch();
  const user_ = useAppSelector(user);

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
            <Recipes userName={userName}/>
          </div>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
}
