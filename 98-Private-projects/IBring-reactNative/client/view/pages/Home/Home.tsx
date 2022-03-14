import { Button, Image, SafeAreaView, SafeAreaViewBase, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
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
        <View style={styles.homeContainer}>
            <View style={styles.homeContainer}>
                <View style={styles.header}>
                    <Image source={require('../../logoAndPhotos/home.jpg')} style={{ width: 40, height: 40 }} />
                    <Image source={require('../../logoAndPhotos/settings.jpg')} style={{ width: 40, height: 40 }} />
                </View>
                <View style={{ width: "80%", padding: 5, marginTop: 10 }}>
                    <Text style={{ marginTop: 10, color: "#7065F2", fontWeight: "bold", fontSize: 20 }}>Hi, {userLogin.value.email}</Text>
                </View>
                <SafeAreaView style={styles.listContainer}>
                    <ScrollView>
                        <View>
                            <Text style={{ marginTop: 10, color: "#A5A6F6", fontWeight: "bold" }}>Your upcoming gathering</Text>
                        </View>
                        <View style={styles.listGap}>
                            {allLists.status === 'loading' ? <Text>Loading</Text> :

                                allLists.lists.map((elem: any, index) => {
                                    return (
                                        <HomeComponent key={index} id={elem._id} findList={elem} upcoming info={
                                            { name: elem.meetingDetails.groupName, date: elem.meetingDetails.date, time: elem.meetingDetails.time, place: elem.meetingDetails.place, bringList: elem.bringItems }} />
                                    );
                                })
                            }
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </View>
            <TouchableOpacity style={styles.newList} onPress={() => { nav('/listForm') }}>
                <Text style={{ color: "white" }}>new list</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
        minHeight: 80,
        backgroundColor: "#7065F2",
    },
    listGap: {
        display: "flex",
        width: "100%",
    },
    listContainer: {
        display: "flex",
        height: "100%",
        alignItems: "center",
        width: "85%",
    },
    newList: {
        // display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#7065F2",
        width: 70,
        height: 70,
        borderRadius: 50,
        position: 'absolute',
        bottom: 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.51,
        shadowRadius: 13.16,

        elevation: 20,
    },
    homeContainer: {
        display: "flex",
        height: "100%",
        alignItems: "center",
        width: "100%",
    }
})