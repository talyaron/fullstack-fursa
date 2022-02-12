import '../MainTemplate/MainTemplate.scss'
import './ListForm.scss'

import camera from '../../logoAndPhotos/camera.jpg';

function ListForm() {

    function handleMeetForm(ev:any){
        ev.preventDefault();
        console.log("prented!");
    }

    return (
        <div className="mainTemplate">
            <div className="mainHeader">
                <img className='toDo' src={camera} />
            </div>
            <div className="mainContent">
                <label className='templateTitle marginTitleNormal'>Please fill the meet form</label>
                <form onSubmit={handleMeetForm} className='next' >
                    <input className='templateInput' placeholder="Group name" type="text" required />
                    <input className='templateInput' placeholder="Meet type" type="text" required />
                    <input className='templateInput' placeholder="Date" type="Date" required />
                    <input className='templateInput' placeholder="Time" type="Time" required />
                    {/* <input className='templateInput' placeholder="Reminder" type="text" required /> */}
                    <select className='templateInput'>
                        <option value="" disabled selected>Reminder</option>
                        <option value="test">test</option>
                    </select>
                    <input className='templateInput' placeholder="Place" type="text" required />
                    <input className='templateInput fewWords' placeholder="A few free words" type="text" required />

                    <input className='templateButton' type="submit" value="Next" />
                </form>
              
            </div>
            
        </div>
    );
}

export default ListForm;