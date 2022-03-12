import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigate } from 'react-router-native';

const HomeComponent = (props: any) => {
    const nav = useNavigate()
    const { name, date, time, place, bringList } = props.info;
    const { id, upcoming, findList } = props;

    function handleClick(ev: any) {
        ev.preventDefault();
        console.log("Clicked!");
        if (findList) {
            nav(`/list/${id}`);
        }
    }

    return (
        <TouchableOpacity style={styles.listContainer} onPress={handleClick}>
            <Image source={{
                uri: `${findList.meetingDetails.imgURL}`,
            }} style={{ width: 50, height: 50 }} />
            <Text>{name}</Text>
            <Text>{date}</Text>
            <Text>{date}</Text>
            <Text>{place}</Text>
            <Text>{time}</Text>
        </TouchableOpacity>
    )
}

export default HomeComponent

const styles = StyleSheet.create({
    listContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
        padding: 10,
        borderRadius: 8,
        gap: 5,
        borderColor: "grey",
        minWidth: "80%",
        maxWidth: 500,
    }
})