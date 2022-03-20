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
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { RootState } from '../../../redux/store';
import { UserState } from '../../../redux/reducers/userReducer';
import TextField from '@mui/material/TextField';
import axios from 'axios';

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
    const { listId } = useParams();
    const [list, setList] = useState<Array<ListIF>>([]);
    const [whatToBring, setWhatToBring] = useState("");

    const userLogin = useSelector<RootState, UserState>(state => state.user);
    const _list = useSelector<RootState, ListState>(state => state.list);
    const dispatch = useDispatch();
    const listInfo: ListIF = _list.listInfo;

    const { userInfo } = userLogin;

    const [listInfoFromLocalStorage, setListInfoFromLocalStorage] = useState(localStorage.getItem('curList') ? JSON.parse(localStorage.getItem('curList')!) : undefined);
    const [updatePage, setUpdatePage] = useState(0);
    /**
     * upcoming list 
     * search list by id from list store in redux
     * useEffect fetch data from last week
     */

    // const listInfoFromLocalStorage = localStorage.getItem('curList') ? JSON.parse(localStorage.getItem('curList')!) : undefined;

    useEffect(() => {
        console.log("listId:", listId);
        console.log("curList:", listInfoFromLocalStorage);

        axios.post('/meeting/getListByID', { id: listId }).then(data => {
            if (data.data.ok) {
                console.log(data.data);
                setListInfoFromLocalStorage(data.data.list);
                localStorage.setItem('curList', JSON.stringify(data.data.list));
            }
        })
        if (userInfo == undefined) {
            nav('/login');
        }
        if (listInfo != undefined) {
            setList([listInfo]);
        }
    }, [updatePage]);

    function handleAddFriends(ev: any) {
        ev.preventDefault();
    }

    function handleHome(ev: any) {
        ev.preventDefault();
        nav('/home');
    }

    function handleSettings(ev: any) {
        ev.preventDefault();
        nav('/home');
    }

    function handleAddOrNot(ev: any, flag: boolean) {
        ev.preventDefault();
        flag ? console.log("add") : console.log("not");
        if (flag) {
            const updatedData = {
                id: listId,
                updatedList: {
                    items: whatToBring,
                    userName: {
                        email: userInfo.email
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
        <>{userInfo !== undefined ?
            <div className="mainTemplate">
                <div className="mainHeader withHome">
                    <div className="homeDiv">
                        <div className="homeLogo">
                            <img onClick={handleHome} src={homeLogo} alt="" />
                        </div>
                        <div className="settingsLogo">
                            <img onClick={handleSettings} src={settings} alt="" />
                        </div>
                    </div>
                    <img className='registerLogo listLogo' alt="" src={sentImage} />
                </div>
                <div className="mainContent">
                    {listInfoFromLocalStorage !== undefined ?
                        <div className="listHeader">
                            <label className='templateTitle marginTitleNormal'>{listInfoFromLocalStorage.meetingDetails.groupName}</label>
                            <div className="listInformation">
                                <label className="info">
                                    <img src={calendar} alt="" />
                                    <label>{listInfoFromLocalStorage.meetingDetails.date.toString().split("T")[0]}</label>
                                </label>
                                <label className="info">
                                    <img src={clock} alt="" />
                                    <label>{listInfoFromLocalStorage.meetingDetails.time}</label>
                                </label>
                                <label className="info">
                                    <img src={location} alt="" />
                                    <label>{listInfoFromLocalStorage.meetingDetails.place}</label>
                                </label>
                            </div>
                            <div className="listFewWords">
                                <p style={{ color: 'grey' }}>{listInfoFromLocalStorage.meetingDetails.fewWords}</p>
                            </div>

                            <form onSubmit={handleAddFriends} className='invitedFriends'>
                                <button type="submit">
                                    <div className="logoWithWords">
                                        <img src={people} alt="" />
                                        <label>{listInfoFromLocalStorage.whoIsThere.length} Friends in the group</label>
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
                                {listInfoFromLocalStorage.bringItems.map((elem: any, index: number) => {
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


                // <div className="mainContent">
                // {listInfo != undefined ?
                //     <div className="listHeader">
                //         <label className='templateTitle marginTitleNormal'>{listInfo.groupName}</label>
                //         <div className="listInformation">
                //             <label className="info">
                //                 <img src={calendar} alt="" />
                //                 <label>{listInfo && listInfo.date}</label>
                //             </label>
                //             <label className="info">
                //                 <img src={clock} alt="" />
                //                 <label>{listInfo && listInfo.time}</label>
                //             </label>
                //             <label className="info">
                //                 <img src={location} alt="" />
                //                 <label>{listInfo && listInfo.place}</label>
                //             </label>
                //         </div>
                //         <div className="listFewWords">
                //             <p style={{ color: 'grey' }}>{listInfo && listInfo.fewWords}</p>
                //         </div>

                //         <form onSubmit={handleAddFriends} className='invitedFriends'>
                //             <button type="submit">
                //                 <div className="logoWithWords">
                //                     <img src={people} alt="" />
                //                     <label>{numberOfPeople} Friends in the group</label>
                //                 </div>

                //                 <label id="addButton">+</label>
                //             </button>
                //         </form>
                //         <div className='whatToBring'>
                //             <div className="whatToBring_header">
                //                 {/* What do you want to bring? */}
                //                 <TextField className='whatToBring_input' id="standard-basic"
                //                     label="What do you want to bring?"
                //                     sx={{ input: { color: '#7065F2' } }}
                //                     variant="standard" onKeyUp={(ev: any) => { setWhatToBring(ev.target.value); }} />
                //                 <div className="whatToBring_addOrNot">
                //                     <button onClick={(ev: any) => handleAddOrNot(ev, true)} className='addOrNot'>+</button>
                //                     <button onClick={(ev: any) => handleAddOrNot(ev, false)} className='addOrNot'>-</button>
                //                 </div>
                //             </div>
                //             {bringList.map((elem, index) => {
                //                 return (

                //                     <div key={index} className="whatToBring_items">
                //                         <div className="whatToBring_items_user">
                //                             <label id='userName'>{elem != undefined && elem.userName}</label>
                //                             {elem.items.map((item) => {
                //                                 return (<label>{item}</label>);
                //                             })}
                //                         </div>
                //                         <div className="whatToBring_items_logo">
                //                             <img src={home} />
                //                             <img src={chef} />
                //                         </div>
                //                     </div>
                //                 );
                //             })}
                //         </div>
                //     </div>