import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { useNavigate } from 'react-router-native';

const Greetings = () => {
    const userLogin = useAppSelector(state => state.logged);
    const dispatch = useAppDispatch();
    const nav = useNavigate();

    function hanleLetsStart(ev: any) {
        ev.preventDefault();
        nav('/ListForm');
    }

    useEffect(() => {
        // if (userLogin.status !== 'logged') {
        //     nav('/login')
        // }
    }, [])

    return (
        <View>
            <Text>Template img</Text>
            <Text>Template img</Text>

            <View>
                <Text>Hi {(userLogin.status === "logged" && userLogin.value.email) ? userLogin.value.email.toString().split('@')[0] : "Unknown"}</Text>
                <Text>Let's make a sharing bring list!</Text>
                <TouchableOpacity onPress={hanleLetsStart}>
                    <Text>Let's start!</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Greetings

const styles = StyleSheet.create({})