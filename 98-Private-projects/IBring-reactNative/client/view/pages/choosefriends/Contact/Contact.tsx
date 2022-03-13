import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-native';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { addWhoIsThere } from '../../../../features/curListSelector/curListReducer';

const Contact = () => {
    const userLogin = useAppSelector(state => state.logged);
    const _list = useAppSelector(state => state.curList);
    const dispatch = useAppDispatch();
    const listInfo = _list.list;
    const nav = useNavigate();

    const [contact, setContact] = useState([]);
    const [selectedFriends, setSelectedFriends] = useState<Array<any>>([{ email: userLogin.value.email }]);

    useEffect(() => {
        axios.get("http://localhost:3001/user/getAllUsers").then(data => {
            if (data.data.ok) {
                const { users } = data.data;
                const found = users.filter((friend: any) => {
                    if (friend.email !== userLogin.value.email) {
                        return friend;
                    }
                })
                setContact(found);
            }
        })
    }, []);

    useEffect(() => {
        console.log(selectedFriends);
    }, [selectedFriends]);

    function handleTypeList(ev: any) {
        ev.preventDefault();
        if (userLogin && listInfo != undefined) {
            const listData = {
                email: userLogin.value.email,
                allUsers: selectedFriends,
                bringItems: [],
                details: listInfo.meetingDetails
            }
            axios.post("http://localhost:3001/meeting/addNewMeeting", {
                email: listData.email, allUsers: listData.allUsers, bringItems: listData.bringItems, details: listData.details
            }).then(data => {
                console.log(data);
                console.log(listData.details)
                dispatch(addWhoIsThere(selectedFriends));
                console.log(data.data.id)
                handleSendInvitation(data.data.id);
                nav(`/list/${data.data.id}`);
            });
        }
    }

    function handleSendInvitation(id: string) {
        console.log("outSide form!");
        if (userLogin) {
            axios.post("http://localhost:3001/user/sendInvitation", {
                meetingAdmin: userLogin.value, friendList: selectedFriends, id: id
            }).then(data => {
                console.log(data);
            });
        }
    }

    function handleAddFriend(ev: any, elem: any) {
        ev.preventDefault();
        console.log("inside form!");
        const found = selectedFriends.find(friend => {
            if (Object.is(friend, elem)) {
                return friend;
            }
        })
        if (!found) {
            setSelectedFriends([...selectedFriends, elem]);
        }
    }

    return (
        <View>
            {contact.map((elem: any, index) => {
                return (
                    <View key={index}>
                        <View>
                            <Image source={require('../../../logoAndPhotos/contact.jpg')}
                                style={{ resizeMode: 'contain', width: 50, height: 50 }} />
                            <Text>{elem.email}</Text>
                        </View>
                        <TouchableOpacity onPress={(ev: any) => handleAddFriend(ev, elem)}><Text>+</Text></TouchableOpacity>
                    </View>
                );
            })}
            <TouchableOpacity onPress={handleTypeList}>
                <Text>Send the invitation</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Contact

const styles = StyleSheet.create({})