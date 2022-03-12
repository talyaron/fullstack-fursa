import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { curListAsync } from '../../../features/curListSelector/curListReducer';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { useNavigate, useParams } from 'react-router-native';

const List = () => {
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
            axios.patch('http://localhost:3001/meeting/updateListByID', updatedData).then(data => {
                console.log(data);
                setUpdatePage(updatePage + 1);
            })
        }
    }

    return (
        <View>
            <Text>List</Text>
            {curList.list.meetingDetails?.imgURL !== "" ? <Image style={{ width: "100%", height: 200 }} source={{ uri: curList.list.meetingDetails?.imgURL }} /> :
                <Image style={{ width: 40, height: 40 }} source={require('../../logoAndPhotos/homeLogo.jpg')} />}


            {curList.list !== undefined ?
                <View>
                    <Text>{curList.list.meetingDetails?.groupName}</Text>
                    <View>
                        <View>
                            {/* <Image src={calendar} alt="" /> */}
                            <Text>{curList.list.meetingDetails?.date?.toString().split("T")[0]}</Text>
                        </View>
                        <View>
                            {/* <img src={clock} alt="" /> */}
                            <Text>{curList.list.meetingDetails?.time}</Text>
                        </View>
                        <View>
                            {/* <img src={location} alt="" /> */}
                            <Text>{curList.list.meetingDetails?.place}</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={{ color: 'grey' }}>{curList.list.meetingDetails?.fewWords}</Text>
                    </View>



                    {curList.list.bringItems?.map((elem: any, index: number) => {
                        return (
                            <View key={index}>
                                <View>
                                    {/* <label id='userName'>{elem != undefined && elem.userName}</label> */}
                                    <Text>{elem.userName.email}</Text>
                                    {elem.items.map((item: any) => {
                                        return (<Text>{item}</Text>);
                                    })}
                                </View>
                                <View>
                                    {/* <img src={home} /> */}
                                    {/* <img src={chef} /> */}
                                </View>
                            </View>
                        );
                    })}
                </View> :
                null}

            <TouchableOpacity onPress={() => nav('/home')}>
                <Text style={{ color: "red" }}>go to home page</Text>
            </TouchableOpacity>
        </View>
    )
}

export default List

const styles = StyleSheet.create({})