import React, { useEffect, useState } from 'react'
import './HomeListComponent.scss';

import clock from '../../logoAndPhotos/clock.jpg'
import calendar from '../../logoAndPhotos/calendar.jpg';
import location from '../../logoAndPhotos/location.png';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../app/hooks';

function HomeListComponent(props: any) {
    const nav = useNavigate()
    const { name, date, time, place, bringList } = props.info;
    const { id, upcoming, findList } = props;

    console.log(findList)

    function handleClick(ev: any) {
        ev.preventDefault();
        if (findList) {
            nav(`/list/${id}`);
        }
    }

    return (
        <div className="contentList" onClick={handleClick}>
            <div className="listInformation">
                <div className="listImage">
                    {findList.meetingDetails.imgURL !== "" ?
                        <img className='listImage_img' src={findList.meetingDetails.imgURL} alt="" /> :
                        <img className='listImage_img' src={calendar} alt="" />}
                </div>
                <div className="listInformation_info">
                    <div className="headerInfo">
                        <label>{name}</label>
                    </div>
                    <div className="listInformation_info_list">
                        <label className="info">
                            <img src={calendar} alt="" />
                            <label>{date.toString().split("T")[0]}</label>
                        </label>
                        <label className="info">
                            <img src={clock} alt="" />
                            <label>{time}</label>
                        </label>
                        <label className="info">
                            <img src={location} alt="" />
                            <label>{place}</label>
                        </label>
                    </div>
                </div>
            </div>
            {upcoming ?
                <div className="myStuf">
                    {bringList.map((bring: any, key: number) => {
                        return (
                            <label key={key}>{bring.item}</label>
                        );
                    })}
                </div>
                : <></>}
        </div>
    )

}

export default HomeListComponent