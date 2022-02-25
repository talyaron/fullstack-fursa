import '../MainTemplate/MainTemplate.scss'
import './ListForm.scss'
import { useEffect, useState } from 'react';
import camera from '../../logoAndPhotos/camera.jpg';
import sentImg from '../../logoAndPhotos/sentImage.jpg';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { addMeetingDetails } from '../../../features/curListSelector/curListReducer';

//URL.createObjectURL(selectedImage)

interface listFormIF {
    imgURL: any;
    groupName: string;
    meetType: string;
    date: Date;
    time: Date;
    reminder: string;
    place: string;
    fewWords: string;
}

function ListForm() {
    const userLogin = useAppSelector(state => state.logged);
    const dispatch = useAppDispatch();

    const nav = useNavigate();

    function handleMeetForm(ev: any) {
        ev.preventDefault();
        const form = ev.target;
        const obj: any = {};
        for (let i = 0; i < form.length; i++) {
            if (form[i].type !== "submit") {
                obj[form[i].name] = form[i].value;
            }
        }
        if (selectedFile) {
            obj["imgURL"] = sentImg;
        }
        dispatch(addMeetingDetails(obj));
        nav('/typeList');
    }


    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState("")

    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
        if (!selectedFile) {
            setPreview("undefined")
            return
        }
        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    function onSelectFile(e: any) {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }
        setSelectedFile(e.target.files[0])
    }

    return (
        <div className="mainTemplate">
            <div className="mainHeader">
                <img className='toDo' src={camera} />
                <div>
                    <input type='file' onChange={onSelectFile} />
                </div>
            </div>
            <div className="mainContent">
                <label className='templateTitle marginTitleNormal'>Please fill the meet form</label>
                <form onSubmit={handleMeetForm} className='next' >
                    <input className='templateInput' name='groupName' placeholder="Group name" type="text" required />
                    <input className='templateInput' name='meetType' placeholder="Meet type" type="text" required />
                    <input className='templateInput' name='date' placeholder="Date" type="Date" required />
                    <input className='templateInput' name='time' placeholder="Time" type="Time" required />
                    <select name='reminder' className='templateInput'>
                        <option value="" disabled selected>Reminder</option>
                        <option value="test">test</option>
                    </select>
                    <input className='templateInput' name='place' placeholder="Place" type="text" required />
                    <input className='templateInput fewWords' name='fewWords' placeholder="A few free words" type="text" required />

                    <input className='templateButton' type="submit" value="Next" />
                </form>

            </div>

        </div>
    );
}

export default ListForm;