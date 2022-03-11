import React from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { useNavigate } from 'react-router-native';
import { useAppDispatch } from '../../app/hooks';
import { logout } from '../../features/userLogin/userLoginReducer';

function Test() {
    const nav = useNavigate();
    const dispatch = useAppDispatch();

    function onPressLearnMore() {
        console.log("Test")
        dispatch(logout());
        nav('/login');
    }

    return (
        <View>
            <Text>How are you</Text>
            <TouchableOpacity
                onPress={onPressLearnMore}
                style={styles.button}
            >
                <Text style={styles.text}>TouchableOpacityTest</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        backgroundColor: "blue",
        padding: 10
    },
    text: {
        color: "white"
    }
})


export default Test