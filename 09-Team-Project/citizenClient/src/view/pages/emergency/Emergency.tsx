import { Button, MenuItem, TextField } from '@mui/material'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { fetchUser, getName, userInfo } from '../../../app/reducer/userReducer';
import CampaignIcon from '@mui/icons-material/Campaign';
import ChatIcon from '@mui/icons-material/Chat';
import UploadIcon from '@mui/icons-material/Upload';
import './Emergency.scss'

export function Emergency() {
    const [type, setType] = useState('harassment');
    const [image, setImage] = useState<Array<any>>([]);
    const [isAmergency, setIsAmergency] = useState(false)
    const [upload, setUpload] = useState(false);
    const dispatch = useAppDispatch()
    const user = useAppSelector(userInfo)
    const org = {};

    useEffect(() => {
        dispatch(fetchUser({ "email": "m.zmiro@hotmail.com", "password": "123" }))
    }, [])

    const accidentType = [
        {
            value: 'emergency',
            label: 'emergency'
        },
        {
            value: 'harassment',
            label: 'harassment'
        },
        {
            value: 'home violence',
            label: 'home violence'

        },
        {
            value: ' violence event',
            label: ' violence event'

        }

    ];

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setType(event.target.value);
        if (event.target.value == 'emergency') {
            setIsAmergency(true);
        }
        else {
            setIsAmergency(false);

        }
    };
    //axios post media
    function selectfileHandler(ev: any) {
        let copy=Object.assign([],image);
        copy.push(ev.target.files[0]);
        console.log(ev.target.files)
        setImage(copy); 
    }

    function newAccidentHandler(ev: any) {
        ev.preventDefault()
        console.log(ev.target.elements.type.value)
        console.log(ev.target.elements.location.value)
        console.log(ev.target.elements.description.value)
        console.log(isAmergency)
        console.log(image)
        //fetch media
        //   const acc=axios.post('http://localhost:3001/accidents/addNewAccident',{type:ev.target.elements.type.value,emergency:isAmergency,date:new Date(),address:ev.target.elements.location.value,description:ev.target.elements.description.value,media:image,user:user,org:{}})
        //   .then((res) => console.log(res))
        //   .catch((err) => console.error(err));

    }
    function handleUpload() {
        setUpload(true)
    }
    return (
        <div className="accident">
            <div className="accident_header">
                <h1 >Accident</h1>
            </div>
            <div className="accident_body">
                <form onSubmit={newAccidentHandler}>
                    <TextField
                        style={{ width: '50%', borderColor: "eb655", color: "#eb655b" }}
                        select
                        name='type'
                        label="Select accident type"
                        value={type}
                        onChange={handleChange}
                    >

                        {accidentType.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <input style={{ borderColor: '#eb655', color: "#eb655b" }} type='location' placeholder='add location' name='location'></input>
                    <input style={{ borderColor: "#eb655", color: "#eb655b" }} type='text' placeholder='accident description' name='description'></input>
                    {upload ? (<input style={{ borderColor: "#eb655", color: "#eb655b" }} type='file' onChange={selectfileHandler}></input>
                    ) : <Button startIcon={<UploadIcon></UploadIcon>} onClick={handleUpload} style={{ borderColor: "blue", color: "blue" }} variant="outlined">upload picture</Button>
                    }
                    <Button startIcon={<ChatIcon></ChatIcon>} style={{ borderColor: "green", color: "green" }} variant="outlined">chat </Button>

                    <Button startIcon={<CampaignIcon></CampaignIcon>} type='submit' style={{ borderColor: "red", color: "red" }} variant="outlined">report accident </Button>
                </form>




            </div>
        </div>
    )
}