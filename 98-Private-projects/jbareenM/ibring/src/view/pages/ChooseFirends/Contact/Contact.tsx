import React, { useEffect } from 'react'
import './Contact.scss';
import '../../MainTemplate/MainTemplate.scss';

import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../../../redux/store';
import { UserState } from '../../../../redux/reducers/userReducer';
import { ListState } from '../../../../redux/reducers/listReducer';
import axios from 'axios';

import whatsapp from '../../../logoAndPhotos/whatsapp.jpg';
import LinkIcon from '../../../logoAndPhotos/link-icon.jpg';
import contactIcon from '../../../logoAndPhotos/contact.jpg';

interface _List {
    imgUrl: string;
    title: string;
    data: string;
    redirectTo: string;
}

function Contact() {
    const userLogin = useSelector<RootState, UserState>(state => state.user);
    const _list = useSelector<RootState, ListState>(state => state.list);
    const dispatch = useDispatch();
    const { listInfo } = _list;
    const nav = useNavigate();

    const [contact, setContact] = useState([]);
    const [selectedFriends, setSelectedFriends] = useState<Array<any>>([]);

    useEffect(() => {
        axios.get("/user/getAllUsers").then(data => {
            if (data.data.ok)
                setContact(data.data.users);
        })
    }, []);

    useEffect(() => {
        console.log(selectedFriends);
    }, [selectedFriends]);

    function handleTypeList(ev: any, elem: any) {
        ev.preventDefault();
        if (userLogin && listInfo != undefined) {
            const listData = {
                email: userLogin.userInfo.email,
                allUsers: [
                    {
                        email: userLogin.userInfo.email
                    },
                    {
                        email: "a@a"
                    }
                ],
                bringItems: [],
                details: listInfo
            }
            axios.post("/meeting/addNewMeeting", {
                email: listData.email, allUsers: listData.allUsers, bringItems: listData.bringItems, details: listData.details
            }).then(data => {
                console.log(data);
            });
        }
        nav(elem.redirectTo);
    }

    function handleSendInvitation(ev: any) {
        ev.preventDefault();
        console.log("outSide form!");
        if (userLogin) {
            axios.post("/user/sendInvitation", {
                meetingAdmin: userLogin.userInfo, friendList: selectedFriends
            }).then(data => {
                console.log(data);
            });
        }
    }

    function handleAddFriend(ev: any, elem: any) {
        ev.preventDefault();
        console.log("inside form!");
        setSelectedFriends([...selectedFriends, elem]);
    }

    return (
        <div className="mainTemplate">
            <div className="mainHeader listForm">

            </div>
            <div className="mainContent">
                <label className='marginTitleNormal'>Please choose friends</label>

                <form onSubmit={handleSendInvitation} className="friendsList">
                    {contact.map((elem: any, index) => {
                        return (
                            <div key={index} className="contact">
                                <div className="img_name">
                                    <img src={contactIcon} alt="" />
                                    <label>{elem.email}</label>
                                </div>
                                <button className='addFriend' onClick={(ev: any) => handleAddFriend(ev, elem)}>+</button>
                                {/* <div className="selectFriend">+</div> */}
                            </div>
                        );
                    })}

                    <input className='templateButton' type="submit" value="Send the invitation" />
                </form>
            </div>
        </div>
    )
}

export default Contact