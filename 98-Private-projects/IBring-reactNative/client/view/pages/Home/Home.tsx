import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
// import homeLogo from '../../logoAndPhotos/homeLogo.jpg';
// import settings from '../../logoAndPhotos/settings.jpg';
// import { useNavigate } from 'react-router-dom';
// import HomeListComponent from '../../components/HomeListComponent/HomeListComponent';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { listAsync } from '../../../features/listSelector/listReducer';
import { useNavigate } from 'react-router-native';
import HomeComponent from '../../components/HomeComponent/HomeComponent';

const Home = () => {
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
        <View>
            <Text>Home</Text>
            <View>
                {allLists.status === 'loading' ? <Text>Loading</Text> :

                    allLists.lists.map((elem: any, index) => {
                        return (
                            <HomeComponent key={index} id={elem._id} findList={elem} upcoming info={
                                { name: elem.meetingDetails.groupName, date: elem.meetingDetails.date, time: elem.meetingDetails.time, place: elem.meetingDetails.place, bringList: elem.bringItems }} />
                        );
                    })
                }
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})