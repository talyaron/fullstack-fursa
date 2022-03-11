import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.scss';
import Sidebar from './view/components/Sidebar/Sidebar';
import storage from './FireBase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

function App() {
  const [file, setFile] = useState<any>(null);
  const [url, setURL] = useState<any>("");
  const [progress, setProgress] = useState(0);
  const [progressShow, setProgressShow] = useState(false);

  function handleChange(e: any) {
    setFile(e.target.files[0]);
  }

  function handleUpload(e: any) {
    e.preventDefault();
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
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url: any) => {
          setFile(null);
          setURL(url);
        })
      }
    )
  }

  return (
    <div>
      <form onSubmit={handleUpload}>
        <input type="file" onChange={handleChange} />
        <button disabled={!file}>upload to firebase</button>
      </form>

      {progressShow && progress < 100 && (
        <div>
          <p>{progress}%</p>
        </div>
      )}

      {progress === 100 && (
        <div>
          <img src={url} />
        </div>
      )}
    </div>
  );
}

export default App;