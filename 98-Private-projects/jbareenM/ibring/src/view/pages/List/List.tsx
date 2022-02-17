import '../MainTemplate/MainTemplate.scss'
import './List.scss'
import { useEffect, useState } from 'react';
import camera from '../../logoAndPhotos/camera.jpg'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

interface listFormIF {
    groupName: string;
    meetType: string;
    date: Date;
    time: Date;
    reminder: string;
    place: string;
    fewWords: string;
}
interface stateIF {
    list: listFormIF;
}

function List() {
    const loggedReducer = useSelector<any>(state => state.loggedReducer);
    const listReducer: any = useSelector<any>(state => state.listFormReducer.list);
    const dispatch = useDispatch();
    const nav = useNavigate();
    const [list, setList] = useState<Array<any>>([]);

    useEffect(() => {
        console.log({ "Logged": loggedReducer });
        console.log({ "List": listReducer })
        setList([listReducer]);
    }, [loggedReducer, listReducer]);
    return (
        <div className="mainTemplate">
            <div className="mainHeader">
                <img className='registerLogo' alt="" />
            </div>
            <div className="mainContent">
                <label className='templateTitle marginTitleNormal'>groupName: {listReducer?.groupName}</label>
                {list.map((elem, index) => {
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
                })}
            </div>
        </div>
    );
}

export default List;