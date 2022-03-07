import React from 'react'
import './ChooseFriends.scss';
import '../MainTemplate/MainTemplate.scss';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import whatsapp from '../../logoAndPhotos/whatsapp.jpg';
import LinkIcon from '../../logoAndPhotos/link-icon.jpg';
import contact from '../../logoAndPhotos/contact.jpg';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';


function ChooseFriends() {
    const userLogin = useAppSelector(state => state.logged);
    const dispatch = useAppDispatch();
    const nav = useNavigate();

    const [typeList, setTypeList] = useState([
        {
            imgUrl: contact,
            title: "Contact",
            data: "Choose friends from your app contact list",
            redirectTo: "/Contact"
        },
        {
            imgUrl: whatsapp,
            title: "Whatsapp",
            data: "Sent the invitation to whatsapp group",
            redirectTo: "/Contact"
        },
        {
            imgUrl: LinkIcon,
            title: "Copy link",
            data: "Submit the link on any media you want",
            redirectTo: "/Contact"
        },
    ]);

    function handleTypeList(ev: any, elem: any) {
        ev.preventDefault();
        // if (userLogin && listInfo != undefined) {
        //     const listData = {
        //         email: userLogin.userInfo.email,
        //         allUsers: [
        //             {
        //                 email: userLogin.userInfo.email
        //             },
        //             {
        //                 email: "a@a"
        //             }
        //         ],
        //         bringItems: [],
        //         details: listInfo
        //     }
        //     axios.post("/meeting/addNewMeeting", {
        //         email: listData.email, allUsers: listData.allUsers, bringItems: listData.bringItems, details: listData.details
        //     }).then(data => {
        //         console.log(data);
        //     });
        // }
        nav(elem.redirectTo);
    }
    return (
        <div className="mainTemplate">
            <div className="mainHeader listForm">

            </div>
            <div className="mainContent">
                <label className='marginTitleNormal'>Please choose friends</label>

                <div className="listContainer">
                    {typeList.map((elem, index) => {
                        return (
                            <form onClick={(ev: any) => { handleTypeList(ev, elem) }} key={index} className="typeList">
                                <div className="imgDiv">
                                    <img src={elem.imgUrl} alt="" />
                                </div>
                                <div className="dataContainer">
                                    <div className="Title">{elem.title}</div>
                                    <div className="data">{elem.data}</div>
                                    <div id={`redirect${index}`} className="redirect" style={{ display: "none" }}>{elem.redirectTo}</div>
                                </div>
                            </form>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default ChooseFriends