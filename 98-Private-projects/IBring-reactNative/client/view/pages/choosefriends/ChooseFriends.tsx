import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { useNavigate } from 'react-router-native';

const ChooseFriends = () => {
    const userLogin = useAppSelector(state => state.logged);
    const dispatch = useAppDispatch();
    const nav = useNavigate();

    const [typeList, setTypeList] = useState([
        {
            imgUrl: '../../logoAndPhotos/contact.jpg',
            title: "Contact",
            data: "Choose friends from your app contact list",
            redirectTo: "/Contact"
        },
        {
            imgUrl: '../../logoAndPhotos/whatsapp.jpg',
            title: "Whatsapp",
            data: "Sent the invitation to whatsapp group",
            redirectTo: "/Contact"
        },
        {
            imgUrl: '../../logoAndPhotos/link-icon.jpg',
            title: "Copy link",
            data: "Submit the link on any media you want",
            redirectTo: "/Contact"
        },
    ]);

    function handleTypeList(ev: any, elem: any) {
        ev.preventDefault();
        nav(elem.redirectTo);
    }

    return (
        <View>
            {typeList.map((elem, index) => {
                console.log(elem.imgUrl)
                return (
                    <TouchableOpacity onPress={(ev: any) => { handleTypeList(ev, elem) }} key={index}>
                        <View>
                            <Image source={require('../../logoAndPhotos/contact.jpg')}
                                style={{ resizeMode: 'contain', width: 100, height: 100 }} />
                        </View>
                        <View>
                            <Text>{elem.title}</Text>
                            <Text>{elem.data}</Text>
                            <Text style={{ display: "none" }}>{elem.redirectTo}</Text>
                        </View>
                    </TouchableOpacity>
                );
            })}
        </View>
    )
}

export default ChooseFriends

const styles = StyleSheet.create({})