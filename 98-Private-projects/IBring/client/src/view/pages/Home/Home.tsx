import React, { useEffect, useState } from 'react'
import './Home.scss';
import homeLogo from '../../logoAndPhotos/homeLogo.jpg';
import settings from '../../logoAndPhotos/settings.jpg';
import { useNavigate } from 'react-router-dom';
import HomeListComponent from '../../components/HomeListComponent/HomeListComponent';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { listAsync } from '../../../features/listSelector/listReducer';
import Sidebar from '../../components/Sidebar/Sidebar';

function Home() {
    const nav = useNavigate();
    const userLogin = useAppSelector(state => state.logged);
    const dispatch = useAppDispatch();
    const allLists = useAppSelector(state => state.allLists);

    useEffect(() => {
        if (userLogin.status === "logged") {
            dispatch(listAsync(userLogin.value.email));
        }
        else {
            nav('/login')
        }
    }, [userLogin]);

    function handleHome(ev: any) {
        ev.preventDefault();
        nav('/home');
    }

    function handleSettings(ev: any) {
        ev.preventDefault();
        nav('/home');
    }

    return (
        <div className="mainTemplate">
            <div className="mainHeader withHome HomePage">
                <div className="homeDiv">
                    <div className="homeLogo">
                        <img onClick={handleHome} src={homeLogo} alt="" />
                    </div>
                    <div className="settingsLogo">
                        {/* <img onClick={handleSettings} src={settings} alt="" /> */}
                        <Sidebar />
                    </div>
                </div>
            </div>
            <div className="mainContent">
                <div className="homeHeader">
                    <label className='templateTitle marginTitleNormal userName'>Hi, {userLogin.value.email}</label>

                    <div className="upcoming">
                        <label id='header'>Your upcoming gathering</label>
                        {allLists.status === 'loading' ? <>Loading</> :

                            allLists.lists.map((elem: any, index) => {
                                return (
                                    <HomeListComponent key={index} id={elem._id} findList={elem} upcoming info={
                                        { name: elem.meetingDetails.groupName, date: elem.meetingDetails.date, time: elem.meetingDetails.time, place: elem.meetingDetails.place, bringList: elem.bringItems }} />
                                );
                            })
                        }
                        {/* 
                        {upcomingList.map((elem, index) => {
                            const findList = allListFromDB.find(dbList => {
                                if (elem.id == dbList._id) {
                                    return dbList;
                                }
                            })
                            return (
                                <HomeListComponent key={index} id={elem.id} findList={findList} upcoming info={
                                    { name: elem.name, date: elem.date, time: elem.time, place: elem.place, bringList: elem.bringList }} />
                            );
                        })} */}

                    </div>

                    <div className="previous">
                        <label id='header'>Your previous gathering</label>
                        {allLists.status === 'loading' ? <>Loading</> :


                            allLists.lists.map((elem: any, index) => {
                                return (
                                    <HomeListComponent key={index} id={elem._id} findList={elem} info={
                                        { name: elem.meetingDetails.groupName, date: elem.meetingDetails.date, time: elem.meetingDetails.time, place: elem.meetingDetails.place, bringList: elem.bringItems }} />
                                );
                            })

                        }
                        {/* {previousList.map((elem, index) => {
                            const findList = allListFromDB.find(dbList => {
                                if (elem.id == dbList._id) {
                                    return dbList;
                                }
                            })
                            return (
                                <HomeListComponent key={index} id={elem.id} findList={findList} info={
                                    { name: elem.name, date: elem.date, time: elem.time, place: elem.place, bringList: elem.bringList }} />
                            );
                        })} */}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home