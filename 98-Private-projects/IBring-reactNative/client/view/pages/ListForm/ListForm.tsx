import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { addMeetingDetails } from '../../../features/curListSelector/curListReducer';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { useNavigate } from 'react-router-native';
import storage from '../../../FireBase';

// import DatePicker from 'react-native-datepicker';
import SelectDropdown from 'react-native-select-dropdown'

const options = ["test"]

const ListForm = () => {
    const dispatch = useAppDispatch();
    const [file, setFile] = useState<any>(null);
    const [url, setURL] = useState<any>("");
    const [progress, setProgress] = useState(0);
    const [progressShow, setProgressShow] = useState(false);

    const [date, setDate] = useState<any>(new Date())
    const [time, setTime] = useState<any>(new Date())
    const [open, setOpen] = useState(false)
    const [groupName, setGroupName] = useState("");
    const [meetType, setMeetType] = useState("");
    const [place, setPlace] = useState("");
    const [fewWords, setFewWords] = useState("");
    const [selectedValue, setSelectedValue] = useState("");

    const nav = useNavigate();

    async function handleMeetForm(ev: any) {
        console.log("handleMeetForm");
        ev.preventDefault();
        const form = ev.target;
        const obj: any = {};
        obj["groupName"] = groupName;
        obj["meetType"] = meetType;
        obj["date"] = date;
        obj["time"] = time;
        obj["reminder"] = selectedValue;
        obj["place"] = place;
        obj["fewWords"] = fewWords;
        obj["imgURL"] = "https://firebasestorage.googleapis.com/v0/b/ibring-7be26.appspot.com/o/images%2F1647011541637E4gUy1wXIAkpdDS.png?alt=media&token=8179cfce-df79-4f7d-b7b0-c6123f63cd0e";
        // console.log(file)
        // obj["imgURL"] = JSON.stringify(file);
        // obj["imgURL"] = url;
        console.log(obj)

        dispatch(addMeetingDetails(obj));
        nav('/typeList');
    }


    function handleUpload() {
        console.log("handleUpload");
        setProgressShow(true);
        const fileName = new Date().getTime() + file.name;
        const storageRef = ref(
            storage, `/images/${fileName}`
        )
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            'state_changed',
            (snapshot: any) => {
                const uploaded = Math.floor(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(uploaded);
            }, (error: any) => {
                console.log(error);
            },
            async () => {
                getDownloadURL(uploadTask.snapshot.ref).then(async (url: any) => {
                    setFile(null);
                    setURL(url);
                })
            }
        )
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                onChangeText={setGroupName}
                placeholder="Group name"
            />
            <TextInput
                style={styles.input}
                onChangeText={setMeetType}
                placeholder="Meet type"
            />
            {/* <DatePicker date={date}  /> */}
            {/* <DatePicker
                style={styles.datePickerStyle}
                date={date}
                mode="date"
                placeholder="select date"
                format="DD-MM-YYYY"
                minDate={new Date()}
                maxDate="01-01-2025"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                    dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0,
                    },
                    dateInput: {
                        marginLeft: 36,
                    },
                }}
                onDateChange={(date) => {
                    setDate(date);
                }}
            />
            <DatePicker
                style={styles.datePickerStyle}
                date={time}
                mode="time"
                placeholder="select date"
                format="HH:MM"
                minDate={new Date()}
                maxDate="01-01-2025"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                    dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0,
                    },
                    dateInput: {
                        marginLeft: 36,
                    },
                }}
                onDateChange={(date) => {
                    setTime(date);
                }}
            /> */}

            <SelectDropdown
                data={options}
                onSelect={(selectedItem, index) => {
                    setSelectedValue(selectedItem);
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                    return item
                }}
            />

            <TextInput
                style={styles.input}
                onChangeText={setPlace}
                placeholder="Place"
            />
            <TextInput
                style={styles.input}
                onChangeText={setFewWords}
                placeholder="fewWords"
            />
            <TouchableOpacity onPress={handleMeetForm}>
                <Text>next</Text>
            </TouchableOpacity>
            {/* {url ? <TouchableOpacity><Text>next</Text></TouchableOpacity> :
                null} */}
            {/* {
                url !== undefined ? <TouchableOpacity onPress={handleUpload}><Text>upload</Text></TouchableOpacity> :
                    null
            } */}

            {/**
              * Time
              * 
              */
            }

        </View >
    )
}

export default ListForm

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 8,
        borderColor: "grey",
        minWidth: "80%",
        maxWidth: 400,
    },
    datePickerStyle: {
        minWidth: "90%",
        maxWidth: 400,
        marginTop: 20,
    },
})