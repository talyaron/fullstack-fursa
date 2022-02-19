import '../MainTemplate/MainTemplate.scss'
import './List.scss'
import { useEffect, useState } from 'react';
import clock from '../../logoAndPhotos/clock.jpg'
import calendar from '../../logoAndPhotos/calendar.jpg';
import location from '../../logoAndPhotos/location.png';
import people from '../../logoAndPhotos/people.jpg';
import home from '../../logoAndPhotos/home.jpg';
import chef from '../../logoAndPhotos/chef.jpg';
import homeLogo from '../../logoAndPhotos/homeLogo.jpg';
import settings from '../../logoAndPhotos/settings.jpg';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../../redux/store';
import { UserState } from '../../../redux/reducers/userReducer';

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

function List() {
    const nav = useNavigate();
    const [list, setList] = useState<Array<ListIF>>([]);

    const userLogin = useSelector<RootState, UserState>(state => state.user);
    const _list = useSelector<RootState, ListState>(state => state.list);
    const dispatch = useDispatch();
    const listInfo: ListIF = _list.listInfo;

    const { userInfo } = userLogin;

    const [numberOfPeople, setNumberOfPeople] = useState(12);

    const [bringList, setBringList] = useState([
        {
            userName: (userInfo && userInfo.email) ? userInfo.email : "Unknown",
            item: "somthing"
        },
        {
            userName: "Person A",
            item: "somthing"
        },
        {
            userName: "Person B",
            item: "somthing"
        },
        {
            userName: "Person C",
            item: "somthing"
        },
        {
            userName: "Person D",
            item: "somthing"
        },
        {
            userName: "Person E",
            item: "somthing"
        },
    ]);

    useEffect(() => {
        if (userInfo == undefined) {
            nav('/login');
        }
        if (listInfo != undefined) {
            setList([listInfo]);
        }
    }, []);

    function handleAddFriends(ev: any) {
        ev.preventDefault();
    }

    return (
        <>{userInfo != undefined ?
            <div className="mainTemplate">
                <div className="mainHeader withHome">
                    <div className="homeDiv">
                        <div className="homeLogo">
                            <img src={homeLogo} alt="" />
                        </div>
                        <div className="settingsLogo">
                            <img src={settings} alt="" />
                        </div>
                    </div>
                    <img className='registerLogo listLogo' alt="" src={listInfo && listInfo.imgURL} />
                </div>
                <div className="mainContent">
                    {listInfo != undefined ?
                        <div className="listHeader">
                            <label className='templateTitle marginTitleNormal'>{listInfo.groupName}</label>
                            <div className="listInformation">
                                <label className="info">
                                    <img src={calendar} alt="" />
                                    <label>{listInfo && listInfo.date}</label>
                                </label>
                                <label className="info">
                                    <img src={clock} alt="" />
                                    <label>{listInfo && listInfo.time}</label>
                                </label>
                                <label className="info">
                                    <img src={location} alt="" />
                                    <label>{listInfo && listInfo.place}</label>
                                </label>
                            </div>
                            <div className="listFewWords">
                                <p style={{ color: 'grey' }}>{listInfo && listInfo.fewWords}</p>
                            </div>

                            <form onSubmit={handleAddFriends} className='invitedFriends'>
                                <button type="submit">
                                    <div className="logoWithWords">
                                        <img src={people} alt="" />
                                        <label>{numberOfPeople} Friends in the group</label>
                                    </div>

                                    <label id="addButton">+</label>
                                </button>
                            </form>
                            <div className='whatToBring'>
                                <div className="whatToBring_header">
                                    What do you want to bring?
                                </div>
                                {bringList.map((elem, index) => {
                                    return (

                                        <div key={index} className="whatToBring_items">
                                            <div className="whatToBring_items_user">
                                                <label id='userName'>{elem != undefined && elem.userName}</label>
                                                <label>{elem.item}</label>
                                            </div>
                                            <div className="whatToBring_items_logo">
                                                <img src={home} />
                                                <img src={chef} />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        : <>Have No List</>}


                    {/* {list.map((elem: any, index: number) => {
                    return (
                        <div key={index} className="listForm">
                            <div className="rowList">
                                <label>date: <span>{elem.date}</span></label>
                            </div>
                            <div className="rowList">
                                <label>groupName: <span>{elem.groupName}</span></label>
                            </div>
                            <div className="rowList">
                                <label>meetType: <span>{elem.meetType}</span></label>
                            </div>
                            <div className="rowList">
                                <label>time: <span>{elem.time}</span></label>
                            </div>
                            <div className="rowList">
                                <label>reminder: <span>{elem.reminder}</span></label>
                            </div>
                            <div className="rowList">
                                <label>place: <span>{elem.place}</span></label>
                            </div>
                            <div className="rowList">
                                <label>fewWords: <span>{elem.fewWords}</span></label>
                            </div>
                        </div>
                    );
                })} */}
                </div>
            </div>
            : <>Please Login</>}
        </>
    );
}

export default List;