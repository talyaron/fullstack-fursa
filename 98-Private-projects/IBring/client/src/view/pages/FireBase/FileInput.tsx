import React, { useRef, useState } from 'react'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import check from '../../logoAndPhotos/camera.jpg';
import storage from '../../../FireBase';

function FileInput({ name, label, value, type, handleInputState, ...rest }: any) {
    const inputRef = useRef<any>();
    const [progress, setProgress] = useState(0);
    const [progressShow, setProgressShow] = useState(false);

    function handleUpload() {
        setProgressShow(true);
        const fileName = new Date().getTime() + value.name;
        const storageRef = ref(
            storage,
            type === 'image' ? `/images/${fileName}` : ""
        )
        const uploadTask = uploadBytesResumable(storageRef, value);
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
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((url: any) => {
                    handleInputState(name, url);
                })
            }
        )
    }

    return (
        <div>
            <input
                type={type}
                ref={inputRef}
                onChange={(e: any) => handleInputState(name, e.currentTarget.files[0])}
                value={value}
                {...rest}
            />
            <button
                onClick={() => inputRef.current.click()}
            >{label}</button>
            {type === "image" && value && (
                <img
                    src={typeof value === 'string' ? value : URL.createObjectURL(value)}
                    alt="file"
                />
            )}
            {value !== null && !progressShow && typeof value !== 'string' && (
                <button onClick={handleUpload}>upload</button>
            )}
            {progressShow && progress < 100 && (
                <div>
                    <p>{progress}%</p>
                </div>
            )}

            {progress === 100 && (
                <div>
                    <img src={check} />
                </div>
            )}
        </div>
    )
}

export default FileInput