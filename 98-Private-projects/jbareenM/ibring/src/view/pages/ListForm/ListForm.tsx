import '../MainTemplate/MainTemplate.scss'
import './ListForm.scss'
import { useEffect, useState } from 'react';
import camera from '../../logoAndPhotos/camera.jpg';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

interface listFormIF{
    groupName: string;
    meetType: string;
    date: Date;
    time: Date;
    reminder: string;
    place: string;
    fewWords: string;
}

function ListForm() {
    const loggedReducer = useSelector<any>(state => state.loggedReducer);
    const dispatch = useDispatch();

    function handleMeetForm(ev: any) {
        ev.preventDefault();
        const form = ev.target;
        console.log(form);
    }

    const [listForm, setListForm] = useState<Array<listFormIF>>([]);

    useEffect(() => {
        console.log({ "Logged": loggedReducer });
    }, [loggedReducer]);
    return (
        <div className="mainTemplate">
            <div className="mainHeader">
                <img className='toDo' src={camera} />
            </div>
            <div className="mainContent">
                <label className='templateTitle marginTitleNormal'>Please fill the meet form</label>
                <form onSubmit={handleMeetForm} className='next' >
                    <input className='templateInput' name='groupName' placeholder="Group name" type="text" required />
                    <input className='templateInput' name='meetType' placeholder="Meet type" type="text" required />
                    <input className='templateInput' name='date' placeholder="Date" type="Date" required />
                    <input className='templateInput' name='time' placeholder="Time" type="Time" required />
                    <select className='templateInput'>
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