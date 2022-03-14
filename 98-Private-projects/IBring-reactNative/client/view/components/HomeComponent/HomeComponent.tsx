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
            <View style={styles.listImage}>
                {findList.meetingDetails.imgURL !== "" ?
                    <Image source={{
                        uri: `${findList.meetingDetails.imgURL}`,
                    }} style={{ width: 60, height: 60, borderRadius: 50 }} /> :
                    <Image source={require('../../logoAndPhotos/calendar.jpg')} style={{ width: 60, height: 60, borderRadius: 50 }} />}
            </View>
            <View style={styles.listInfo}>
                <View>
                    <Text style={{ fontSize: 15, fontWeight: "bold", color: "#7065F2" }}>{name}</Text>
                </View>
                <View style={styles.listInformation_info_list}>
                    <View style={styles.info}>
                        <Image source={require('../../logoAndPhotos/calendar.jpg')} style={{ width: 20, height: 20 }} />
                        <Text style={{ marginLeft: 5 }}>{date.toString().split("T")[0]}</Text>
                    </View>
                    <View style={styles.info}>
                        <Image source={require('../../logoAndPhotos/clock.jpg')} style={{ width: 20, height: 20 }} />
                        <Text style={{ marginLeft: 5 }}>{time}</Text>
                    </View>
                    <View style={styles.info}>
                        <Image source={require('../../logoAndPhotos/location.png')} style={{ width: 20, height: 20 }} />
                        <Text style={{ marginLeft: 5 }}>{place}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default HomeComponent

const styles = StyleSheet.create({
    listInformation_info_list: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        width: "70%",
        marginTop: 5,
    },
    info: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        gap: 10,
        marginLeft: 3,
        marginTop: 5,
    },
    listImage: {
        height: "100%",
        marginTop: 15,
    },
    listInfo: {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        gap: 20,
        height: "100%",
        marginTop: 15,
        marginLeft: 20,
    },
    listContainer: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: 10,
        borderRadius: 8,
        width: "100%",
        height: 150,
        marginTop: 10,
        backgroundColor: "#F0F0FF",
        flexWrap: "wrap",
    }
})