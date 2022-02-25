import React, { useEffect, useState } from 'react'
import './FriendsInGroup.scss';
import '../../MainTemplate/MainTemplate.scss';

import sentImage from '../../../logoAndPhotos/sentImage.jpg';
import contactIcon from '../../../logoAndPhotos/contact.jpg';
import { useAppSelector } from '../../../../app/hooks';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function FriendsInGroup() {
    const userLogin = useAppSelector(state => state.logged);
    const curList = useAppSelector(state => state.curList);
    const nav = useNavigate();

    useEffect(() => {
        axios.get("/user/getAllUsers").then(data => {
            if (data.data.ok) {
                let remainingFriend: Array<any> = [];
                data.data.users.map((user: any) => {
                    const friendFound = curList.list.whoIsThere?.find(element => element.email === user.email);
                    if (!friendFound) {
                        remainingFriend.push(user);
                    }
                })
                setContact(remainingFriend);
            }
        })
    }, [])

    const [contact, setContact] = useState<Array<any>>([]);
    const [selectedFriends, setSelectedFriends] = useState<Array<any>>([]);

    async function handleSendInvitation(ev: any) {
        ev.preventDefault();
        console.log("outSide form!");
        try {
            const sentInvite = await axios.post("/user/sendInvitation", {
                meetingAdmin: userLogin.value, friendList: selectedFriends
            });
            const responseUpdate = await axios.patch('/meeting/updateFrindList', { id: curList.list, updatedList: selectedFriends });
            nav(`/list/${responseUpdate.data.list._id}`)
        } catch (error:any) {
            
        }
    }

    function handleAddFriend(ev: any, elem: any) {
        ev.preventDefault();
        console.log("inside form!");
        setSelectedFriends([...selectedFriends, elem]);
    }

    return (
        <div className="mainTemplate">
            <div className="mainHeader">
                <img className='groupImage' alt="" src={sentImage} />
            </div>
            <div className="mainContent">
                <label className='marginTitleNormal'></label>
                <div className="whoIsThere">
                    <h3>Friends in the group</h3>
                    <div className="friendsList">
                        {curList.list.whoIsThere?.map((friend: any, index: number) => {
                            return (
                                <div key={index} className="contact">
                                    <div className="img_name">
                                        <img src={contactIcon} alt="" />
                                        <label>{friend.email}</label>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="whoIsThere">
                    <h3>add friends</h3>
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
        </div >
    )
}

export default FriendsInGroup