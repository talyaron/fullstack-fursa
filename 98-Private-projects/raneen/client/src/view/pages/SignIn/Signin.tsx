import  Register from "../../components/register/Register";
import "./SignIn.scss";
import { updateUser,selectUser } from '../../../app/reducers/userReducer';
import { useAppSelector,useAppDispatch } from '../../../app/hooks';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
 import { useState, useEffect } from 'react';


export default function SignIn() {
      const user = useAppSelector(selectUser);
        const dispatch = useAppDispatch()
      let nav = useNavigate();

        useEffect(() => {
   console.log(user._id);
           if(user._id)
           {
                nav('/Profile');
           }
  }, []);
     
  // function checkUser(){
  //   console.log(user);
  //          if(user)
  //          {
  //               nav('/Profile');
  //          }
  // }
  // }
  //     const dispatch = useAppDispatch()
  //     let nav = useNavigate();
     
    //  const result = await axios.post('/users/logIn', {email: "raneen.mandalawe@gmail.com", password: "1234"});
    //     const data1 = result.data;
    //     if(data1.ok){

    //       console.log(data1.user)
    //       console.log("hi keko")
    //       dispatch(updateUser(data1.user))
          //  const user = useAppSelector(selectUser);

       


     
  return (
    <div className="hi">
   
      <Register/>
      {/* {user} */}
    </div> 
  );
}
