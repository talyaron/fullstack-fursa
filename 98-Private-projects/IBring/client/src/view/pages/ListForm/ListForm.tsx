import '../MainTemplate/MainTemplate.scss'
import './ListForm.scss'
import { useEffect, useState } from 'react';
import camera from '../../logoAndPhotos/camera.jpg';
import sentImg from '../../logoAndPhotos/sentImage.jpg';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { addMeetingDetails } from '../../../features/curListSelector/curListReducer';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import storage from '../../../FireBase';

// import FileBase64 from 'react-file-base64';

function ListForm() {
    const userLogin = useAppSelector(state => state.logged);
    const dispatch = useAppDispatch();
    const [file, setFile] = useState<any>(null);
    const [url, setURL] = useState<any>("");
    const [progress, setProgress] = useState(0);
    const [progressShow, setProgressShow] = useState(false);

    const nav = useNavigate();

    async function handleMeetForm(ev: any) {
        console.log("handleMeetForm");
        ev.preventDefault();
        const form = ev.target;
        const obj: any = {};
        for (let i = 0; i < form.length; i++) {
            if (form[i].type !== "submit") {
                obj[form[i].name] = form[i].value;
            }
        }
        console.log(file)
        obj["imgURL"] = JSON.stringify(file);
        obj["imgURL"] = url;
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

    // create a preview as a side effect, whenever selected file is changed
    // useEffect(() => {
    //     if (!selectedFile) {
    //         setPreview("undefined")
    //         return
    //     }
    //     const objectUrl = URL.createObjectURL(selectedFile)
    //     setPreview(objectUrl)
    //     return () => URL.revokeObjectURL(objectUrl)
    // }, [selectedFile])


    function handleChange(e: any) {
        setFile(e.target.files[0]);
    }

    return (
        <div className="mainTemplate">
            <div className="mainHeader addImage">
                {/* <img className='toDo' src={camera} /> */}
                {/* <input type='file' onChange={onSelectFile} /> */}
                <label className="custom-file-upload">
                    <input type="file" onChange={handleChange} />
                    <img className='toDo' src={camera} />
                </label>
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

                    {url ? <input className='templateButton' type="submit" value="Next" /> :
                        null}
                </form>
                {url !== undefined ? <button onClick={handleUpload} className='templateButton'>upload</button> :
                    null}
            </div>

        </div>
    );
}

export default ListForm;