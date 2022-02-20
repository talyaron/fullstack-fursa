import React, { useEffect, useState } from 'react'
import './Home.scss';
import homeLogo from '../../logoAndPhotos/homeLogo.jpg';
import settings from '../../logoAndPhotos/settings.jpg';
import clock from '../../logoAndPhotos/clock.jpg'
import calendar from '../../logoAndPhotos/calendar.jpg';
import location from '../../logoAndPhotos/location.png';
import people from '../../logoAndPhotos/people.jpg';
import home from '../../logoAndPhotos/home.jpg';
import chef from '../../logoAndPhotos/chef.jpg';

import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { RootState } from '../../../redux/store';
import { UserState } from '../../../redux/reducers/userReducer';
import { stringify } from 'querystring';
import e from 'express';
import HomeListComponent from '../../components/HomeListComponent/HomeListComponent';

interface ListIF {
    imgURL?: string;
    groupName: string;
    meetType: string;
    date: Date;
    time: Date;
    reminder: string;
    place: string;
    fewWords: string;
}
interface ListState {
    loading?: boolean,
    error?: string,
    listInfo: ListIF
}

function Home() {
    const nav = useNavigate();
    const userLogin = useSelector<RootState, UserState>(state => state.user);
    const _list = useSelector<RootState, ListState>(state => state.list);
    const dispatch = useDispatch();
    const listInfo: ListIF = _list.listInfo;

    const { userInfo } = userLogin;

    const [upcomingList, setUpcomingList] = useState([
        {
            name: "asd",
            date: "123",
            time: "123",
            place: "465",
            bringList: [
                { item: "Egg" }
            ]
        },
        {
            name: "asd",
            date: "123",
            time: "123",
            place: "465",
            bringList: [
                { item: "Egg" }
            ]
        }
    ]);

    const [previousList, setPreviousList] = useState([
        {
            name: "asd",
            date: "123",
            time: "123",
            place: "465",
            bringList: [
                { item: "Egg" }
            ]
        },
        {
            name: "asd",
            date: "123",
            time: "123",
            place: "465",
            bringList: [
                { item: "Egg" }
            ]
        },
        {
            name: "asd",
            date: "123",
            time: "123",
            place: "465",
            bringList: [
                { item: "Egg" }
            ]
        },
        {
            name: "asd",
            date: "123",
            time: "123",
            place: "465",
            bringList: [
                { item: "Egg" }
            ]
        },
    ]);

    useEffect(() => {

    }, []);

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
                        <img onClick={handleSettings} src={settings} alt="" />
                    </div>
                </div>
            </div>
            <div className="mainContent">
                <div className="homeHeader">
                    <label className='templateTitle marginTitleNormal userName'>Hi, {userInfo && userInfo.email}</label>

                    <div className="upcoming">
                        <label id='header'>Your upcoming gathering</label>

                        {upcomingList.map((elem, index) => {
                            return (
                                <HomeListComponent key={index} id={index} upcoming info={
                                    { name: elem.name, date: elem.date, time: elem.time, place: elem.place, bringList: elem.bringList }} />
                            );
                        })}

                    </div>

                    <div className="previous">
                        <label id='header'>Your previous gathering</label>

                        {previousList.map((elem, index) => {
                            return (
                                <HomeListComponent key={index} id={index} info={
                                    { name: elem.name, date: elem.date, time: elem.time, place: elem.place, bringList: elem.bringList }} />
                            );
                        })}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home