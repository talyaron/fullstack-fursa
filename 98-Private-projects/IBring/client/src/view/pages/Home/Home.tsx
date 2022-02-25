import React, { useEffect, useState } from 'react'
import './Home.scss';
import homeLogo from '../../logoAndPhotos/homeLogo.jpg';
import settings from '../../logoAndPhotos/settings.jpg';
import { useNavigate } from 'react-router-dom';
import HomeListComponent from '../../components/HomeListComponent/HomeListComponent';
import axios from 'axios';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';

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

function Home() {
    const nav = useNavigate();
    const userLogin = useAppSelector(state => state.logged);
    const dispatch = useAppDispatch();



    const [allListFromDB, setAllListFromDB] = useState<Array<any>>([]);
    const [upcomingList, setUpcomingList] = useState<Array<any>>([]);

    const [previousList, setPreviousList] = useState<Array<any>>([
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
        if (userLogin.status === "logged") {
            let listCopy: Array<any> = [];
            axios.post('/meeting/getListByUser', { email: userLogin.value.email }).then(data => {
                /**
                 * save all data in redux
                 */
                console.log(data.data);
                setAllListFromDB(data.data.lists);
                data.data.lists.forEach((element: any, index: number) => {
                    const { date, groupName, time, place } = element.meetingDetails;
                    listCopy.push({
                        id: element._id,
                        name: groupName,
                        date: date,
                        time: time,
                        place: place,
                        bringList: [...element.bringItems]
                    });
                });
                setUpcomingList(listCopy);
                setPreviousList(listCopy);
            })

        }
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
                    <label className='templateTitle marginTitleNormal userName'>Hi, {userLogin.value.email}</label>

                    <div className="upcoming">
                        <label id='header'>Your upcoming gathering</label>

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
                        })}

                    </div>

                    <div className="previous">
                        <label id='header'>Your previous gathering</label>

                        {previousList.map((elem, index) => {
                            const findList = allListFromDB.find(dbList => {
                                if (elem.id == dbList._id) {
                                    return dbList;
                                }
                            })
                            return (
                                <HomeListComponent key={index} id={elem.id} findList={findList} info={
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