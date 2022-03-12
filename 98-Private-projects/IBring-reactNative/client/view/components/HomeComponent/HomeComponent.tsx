import { Image, StyleSheet, Text, View } from 'react-native'
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
        <View style={styles.listContainer} onTouchEnd={handleClick}>
            <Image source={{
                uri: `${findList.meetingDetails.imgURL}`,
            }} style={{ width: 50, height: 50 }} />
            <Text>{name}</Text>
            <Text>{date}</Text>
            <Text>{date}</Text>
            <Text>{place}</Text>
            <Text>{time}</Text>
        </View>
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
    }
})