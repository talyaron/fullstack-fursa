import '../MainTemplate/MainTemplate.scss'
import './ListForm.scss'
import { useEffect, useState } from 'react';
import camera from '../../logoAndPhotos/camera.jpg';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { listFormAction } from '../../../actions/Actions';

interface listFormIF {
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
    const nav = useNavigate();

    function handleMeetForm(ev: any) {
        ev.preventDefault();
        const form = ev.target;
        const obj: any = {};
        for (let i = 0; i < form.length; i++) {
            // console.log(form[i].value, form[i].name, form[i].type);
            if (form[i].type !== "submit") {
                obj[form[i].name] = form[i].value;
            }
        }
        setListForm(obj);

        dispatch(listFormAction(obj));
        nav('/typeList');
    }

    const [listForm, setListForm] = useState<listFormIF>();

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