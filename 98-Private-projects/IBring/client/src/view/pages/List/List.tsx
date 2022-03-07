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
import sentImage from '../../logoAndPhotos/sentImage.jpg';
import { useNavigate, useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { curListAsync } from '../../../features/curListSelector/curListReducer';
import Sidebar from '../../components/Sidebar/Sidebar';

function List() {
    const nav = useNavigate();
    const { listId } = useParams();
    const [whatToBring, setWhatToBring] = useState("");

    const userLogin = useAppSelector(state => state.logged);
    const curList = useAppSelector(state => state.curList);
    const dispatch = useAppDispatch();

    const [updatePage, setUpdatePage] = useState(0);

    useEffect(() => {
        console.log("listId:", listId);
        if (listId === "") {
            nav('/home');
        }

        dispatch(curListAsync(listId));

        if (userLogin.status !== "logged") {
            nav('/login');
        }
    }, [updatePage]);

    function handleAddFriends(ev: any) {
        ev.preventDefault();
        nav('/FriendsInGroup')
    }

    function handleHome(ev: any) {
        ev.preventDefault();
        nav('/home');
    }

    function handleSettings(ev: any) {
        ev.preventDefault();
        nav('/home');
    }

    useEffect(() => {
        if (userLogin.status === 'idle') {
            nav('/login');
        }
    }, [userLogin])

    function handleAddOrNot(ev: any, flag: boolean) {
        ev.preventDefault();
        flag ? console.log("add") : console.log("not");
        if (flag) {
            const updatedData = {
                id: listId,
                updatedList: {
                    items: whatToBring,
                    userName: {
                        email: userLogin.value.email
                    }
                }
            }
            axios.patch('/meeting/updateListByID', updatedData).then(data => {
                console.log(data);
                setUpdatePage(updatePage + 1);
            })
        }
    }

    return (
        <>{userLogin.status === "logged" ?
            <div className="mainTemplate">
                <div className="mainHeader withHome">
                    <div className="homeDiv">
                        <div className="homeLogo">
                            <img onClick={handleHome} src={homeLogo} alt="" />
                        </div>
                        <div className="settingsLogo">
                            {/* <img onClick={handleSettings} src={settings} alt="" /> */}
                            <Sidebar />
                        </div>
                    </div>
                    <img className='registerLogo listLogo' alt="" src={sentImage} />
                </div>
                <div className="mainContent">
                    {curList.list !== undefined ?
                        <div className="listHeader">
                            <label className='templateTitle marginTitleNormal'>{curList.list.meetingDetails?.groupName}</label>
                            <div className="listInformation">
                                <label className="info">
                                    <img src={calendar} alt="" />
                                    <label>{curList.list.meetingDetails?.date?.toString().split("T")[0]}</label>
                                </label>
                                <label className="info">
                                    <img src={clock} alt="" />
                                    <label>{curList.list.meetingDetails?.time}</label>
                                </label>
                                <label className="info">
                                    <img src={location} alt="" />
                                    <label>{curList.list.meetingDetails?.place}</label>
                                </label>
                            </div>
                            <div className="listFewWords">
                                <p style={{ color: 'grey' }}>{curList.list.meetingDetails?.fewWords}</p>
                            </div>

                            <form onSubmit={handleAddFriends} className='invitedFriends'>
                                <button type="submit">
                                    <div className="logoWithWords">
                                        <img src={people} alt="" />
                                        <label>{curList.list.whoIsThere?.length} Friends in the group</label>
                                    </div>

                                    <label id="addButton">+</label>
                                </button>
                            </form>
                            <div className='whatToBring'>
                                <div className="whatToBring_header">
                                    {/* What do you want to bring? */}
                                    <TextField className='whatToBring_input' id="standard-basic"
                                        label="What do you want to bring?"
                                        sx={{ input: { color: '#7065F2' } }}
                                        variant="standard" onKeyUp={(ev: any) => { setWhatToBring(ev.target.value); }} />
                                    <div className="whatToBring_addOrNot">
                                        <button onClick={(ev: any) => handleAddOrNot(ev, true)} className='addOrNot'>+</button>
                                        <button onClick={(ev: any) => handleAddOrNot(ev, false)} className='addOrNot'>-</button>
                                    </div>
                                </div>
                                {curList.list.bringItems?.map((elem: any, index: number) => {
                                    return (
                                        <div key={index} className="whatToBring_items">
                                            <div className="whatToBring_items_user">
                                                {/* <label id='userName'>{elem != undefined && elem.userName}</label> */}
                                                <label id='userName'>{elem.userName.email}</label>
                                                {elem.items.map((item: any) => {
                                                    return (<label>{item}</label>);
                                                })}
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



                </div>
            </div>
            : <>Please Login</>}
        </>
    );
}

export default List;