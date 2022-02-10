import '../MainTemplate/MainTemplate.scss'
import './ListForm.scss'

import camera from '../../logoAndPhotos/camera.jpg';

function ListForm() {
    return (
        <div className="mainTemplate">
            <div className="mainHeader">
                <img src={camera} />
            </div>
            <div className="mainContent">
                <label className='templateTitle'>Please fill the meet form</label>

                <form className='next' >
                    <input className='templateInput' placeholder="Group name" type="text" required />
                    <input className='templateInput' placeholder="Meet type" type="text" required />
                    <input className='templateInput' placeholder="Date" type="Date" required />
                    <input className='templateInput' placeholder="Time" type="Time" required />
                    <input className='templateInput' placeholder="Reminder" type="text" required />
                    <input className='templateInput' placeholder="Place" type="text" required />
                    <input className='templateInput' placeholder="A few free words" type="text" required />
                    <input className='templateButton' type="submit" value="Next" />
                </form>
            </div>
        </div>
    );
}

export default ListForm;