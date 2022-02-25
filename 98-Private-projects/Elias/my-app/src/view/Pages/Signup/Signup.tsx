//import { useState } from 'react';
import { useEffect ,useState} from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { changeNavText } from '../../../app/reducer/NavTextReducer';
import { GetUserinfo, getUserInfoAsync} from '../../../app/reducer/UserReducer';
import './Signup.scss';

//import { Link, useLocation, useNavigate } from "react-router-dom";


interface Userinfo {
    Email: string;
    Fname: string;
    Lname: string;
}

function Signup(props: any) {
    //const[username,setusername]=useState("");
   // const user_name:string = username;

    const user = useAppSelector(GetUserinfo);

    const dispatch = useAppDispatch();

        useEffect(() => {
            dispatch(changeNavText("Sign up to save List"));
        }, [dispatch]);
    function SignUpHandel(e: any) {
        console.log("signup pressed");
        // dispatch(login({
        //     userInfo: {
        //         Email: "Elias",
        //         Fname: "Elias",
        //         Lname: "elias"
        //     },
        //         Islogin: "True",
        //     status: 'loading'

        // }));
        // console.log(user.userInfo);
        

        // useEffect(()=>{
        //     //GetUserName()
        // },[]);
            dispatch(getUserInfoAsync());

    }

    return (
        <div className='wrapper'>
            <div >signup to save list</div>
            <div className='imagTeampet'>
                <img src="" alt="" />
            </div>
            <div className='loginOp'>
                <button className='googlebuttonText'>Google</button>
                or
                <form className='other' action="submit">
                    <input type="text" className=' inputs username' placeholder='Email' />
                    <input type="password" className='inputs password' placeholder='Password' />

                </form>

                <button className='SignUpbtn' onClick={SignUpHandel}>Sign Up</button>
            </div>

        </div>

    );
}

export default Signup;
