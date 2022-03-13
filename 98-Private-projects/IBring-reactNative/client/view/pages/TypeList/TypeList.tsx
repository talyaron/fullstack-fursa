import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { useNavigate } from 'react-router-native';

const TypeList = () => {
    const userLogin = useAppSelector(state => state.logged);
    const dispatch = useAppDispatch();
    const nav = useNavigate();

    const [typeList, setTypeList] = useState([
        {
            imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Noun_Project_list_icon_119366_cc.svg/1024px-Noun_Project_list_icon_119366_cc.svg.png",
            title: "Empty list",
            data: "Let friends write down what they bring",
            redirectTo: "/choosefriends"
        },
        {
            imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Noun_Project_list_icon_119366_cc.svg/1024px-Noun_Project_list_icon_119366_cc.svg.png",
            title: "Manual list",
            data: "Write your own list",
            redirectTo: "/choosefriends"
        },
        {
            imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Noun_Project_list_icon_119366_cc.svg/1024px-Noun_Project_list_icon_119366_cc.svg.png",
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
        <View>
            {typeList.map((elem, index) => {
                return (
                    <TouchableOpacity onPress={(ev: any) => handleTypeList(ev, elem)}>
                        <Image style={{ width: 100, height: 100 }} source={{ uri: elem.imgUrl }} />
                        <View>
                            <Text>{elem.title}</Text>
                            <Text>{elem.data}</Text>
                            <Text style={{ display: "none" }}>{elem.redirectTo}</Text>
                        </View>
                    </TouchableOpacity>
                );
            })}
        </View >
    )
}

export default TypeList

const styles = StyleSheet.create({})