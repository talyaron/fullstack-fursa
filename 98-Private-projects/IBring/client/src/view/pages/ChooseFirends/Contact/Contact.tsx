import React, { useEffect } from 'react'
import './Contact.scss';
import '../../MainTemplate/MainTemplate.scss';

import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import contactIcon from '../../../logoAndPhotos/contact.jpg';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { addWhoIsThere } from '../../../../features/curListSelector/curListReducer';


function Contact() {
    const userLogin = useAppSelector(state => state.logged);
    const _list = useAppSelector(state => state.curList);
    const dispatch = useAppDispatch();
    const listInfo = _list.list;
    const nav = useNavigate();

    const [contact, setContact] = useState([]);
    const [selectedFriends, setSelectedFriends] = useState<Array<any>>([{ email: userLogin.value.email }]);

    useEffect(() => {
        axios.get("/user/getAllUsers").then(data => {
            if (data.data.ok) {
                const { users } = data.data;
                const found = users.filter((friend: any) => {
                    if (friend.email !== userLogin.value.email) {
                        return friend;
                    }
                })
                setContact(found);
            }
        })
    }, []);

    useEffect(() => {
        console.log(selectedFriends);
    }, [selectedFriends]);

    function handleTypeList(ev: any) {
        ev.preventDefault();
        if (userLogin && listInfo != undefined && JSON.stringify(listInfo.meetingDetails) !== JSON.stringify({})) {
            const listData = {
                email: userLogin.value.email,
                allUsers: selectedFriends,
                bringItems: [],
                details: listInfo.meetingDetails
            }
            axios.post("/meeting/addNewMeeting", {
                email: listData.email, allUsers: listData.allUsers, bringItems: listData.bringItems, details: listData.details
            }).then(data => {
                console.log(data);
                console.log(listData.details)
                dispatch(addWhoIsThere(selectedFriends));
                console.log(data.data.id)
                handleSendInvitation(data.data.id);
                nav(`/list/${data.data.id}`);
            });
        } else {
            alert(`You can't add list with empty details!`);
        }
    }

    function handleSendInvitation(id: string) {
        console.log("outSide form!");
        if (userLogin) {
            axios.post("/user/sendInvitation", {
                meetingAdmin: userLogin.value, friendList: selectedFriends, id: id
            }).then(data => {
                console.log(data);
            });
        }
    }

    function handleAddFriend(ev: any, elem: any) {
        ev.preventDefault();
        console.log("inside form!");
        const found = selectedFriends.find(friend => {
            if (Object.is(friend, elem)) {
                return friend;
            }
        })
        if (!found) {
            setSelectedFriends([...selectedFriends, elem]);
        }
    }

    return (
        <div className="mainTemplate">
            <div className="mainHeader listForm">

            </div>
            <div className="mainContent">
                <label className='marginTitleNormal'>Please choose friends</label>

                <form onSubmit={handleTypeList} className="friendsList">
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