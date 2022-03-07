import './TypeList.scss';
import '../MainTemplate/MainTemplate.scss';
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../../redux/store';
import { UserState } from '../../../redux/reducers/userReducer';
import { ListState } from '../../../redux/reducers/listReducer';
import axios from 'axios';

interface _List {
    imgUrl: string;
    title: string;
    data: string;
    redirectTo: string;
}

function TypeList() {
    const userLogin = useSelector<RootState, UserState>(state => state.user);
    const _list = useSelector<RootState, ListState>(state => state.list);
    const dispatch = useDispatch();
    const { listInfo } = _list;
    const nav = useNavigate();

    const [typeList, setTypeList] = useState([
        {
            imgUrl: "https://s3-alpha-sig.figma.com/img/b8ad/5cc8/ff415d03e31dd677c1a719427aebc57c?Expires=1645401600&Signature=gXKaJFmuYA~3aEosuuz4DvsFEZAsHGBWoAn73i7cOx-Z3ark8-~THXjjqyALxpzM6PCyBEv~8sGIemGnev66HvvoNnqAak0AzQk-bnw2qJ~RlzrEgaOO~4T0rkVUycYlWmlbBDio6AYlRbWEa2-vRpXHYMc1JgGdmMBL1oe3jptoxhXesv4wZ-tJJzLjVnwTk37kpbCfYSHSh0cUG1aE4PDstlrKELcnPc-BGI9b3FvbentnasmNQi8XVxnASqkAqLBh5zliCQ1Xy5OlQcOqpX3yGmlHM6T-btJAgP1YHfhX5xhQ8I9k1PFJuOH-3AUYFIb1~u~jI~CN6J3OrrVJyA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
            title: "Empty list",
            data: "Let friends write down what they bring",
            redirectTo: "/choosefriends"
        },
        {
            imgUrl: "https://s3-alpha-sig.figma.com/img/2cee/be77/1751c9e0130cbc24dd88af91cc510813?Expires=1645401600&Signature=aaCLCsguLAKMMs73FOi9KXOz1-8zD-BO~T7QjjZa4B-u2guJQpiJLw1iD-TJuQMeB3m2phwbC0tg30m2CweV0VZZ3Qf~iuEiu8TYv0K-MadRJDD3sMxo21xJVjeCYji6bLjCE8wbUx8qTaMBzCRvZPVPWZkUSuJ77WiO5Ft~yoQi5rT~0HlC7fA~j4oCOxYAw-1tRSxMBiLbHSIyiLnX9KWELmk~NhiVOlIUfAdw--HiRBZakjazTIAfXBHqiTcRASrFyCn~jBBQ7M7yz6nixzXrKWjBQw7pW2cpd7XcT~ys3lahwcPfiBjDW5Nt-gRxxpPY1RVKEg4rW4o8MSizIA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
            title: "Manual list",
            data: "Write your own list",
            redirectTo: "/choosefriends"
        },
        {
            imgUrl: "https://s3-alpha-sig.figma.com/img/697c/fdd9/43724849ea5ca7e754b304927de585fd?Expires=1645401600&Signature=bvRJF5OId0mW-vyZU--rcxR7VXSeO8oVR2~vFPh~jflk1g1ARA8YJtlNCWEOzJjJwEeXl9eAy-PhbWGHH69xpn6Po39U1VlC0xO64T6m~B1UHNA6DagVsZyvArlQVT8ehjT17L6ao3rqDh~87Or5Bzi2HcBx9b79mOuoPg63iMvB8zGS4ShCNFxdCLhuU2qE-s~OdNFJWZdboYCL-OhtO8aPEhjTOcBYbfM2JDSa6s7x2jo6iZP3eXp47fHNfeejlDtzb6vGTC8gwtT5L3wIz7mPriqoVO60Rq6WzmWOt~UWt3eCiUSyEgV3eZbDtysADIh8uNRNj6cVw-XzFYvnVQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
            title: "Smart list",
            data: "Let IBring make a pefect list for you",
            redirectTo: "/choosefriends"
        },
    ]);

    function handleTypeList(ev: any, elem: any) {
        ev.preventDefault();
        nav(elem.redirectTo);
    }

    return (
        <div className="mainTemplate">
            <div className="mainHeader listForm">

            </div>
            <div className="mainContent">
                <label className='marginTitleNormal'>Please choose a list type</label>

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
    );
}

export default TypeList;