import React from 'react';
import './style.scss'
import { useAppDispatch, useAppSelector } from '../../../app/hooks';

function ProfileInfo() {

  const accident_ = useAppSelector(state => state.accident);
    const info ={name:"Name",city:"some city",phone:" 0527-***-***"}

    return (
        <div>
            <div className="profileInfo">
                <h1>{info.name}</h1>
                <div><p>City: {info.city}</p></div>
                <div><p>Phone Number: {info.phone}</p></div>
            </div >
        </div>
    )
}

export default ProfileInfo;