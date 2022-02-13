import './TypeList.scss';
import '../MainTemplate/MainTemplate.scss';
import { useState } from "react";
import EmptyLisy from '../../logoAndPhotos/ListEmpty.png';

function TypeList() {

    const [typeList, setTypeList] = useState([]);

    return (
        <div className="mainTemplate">
            <div className="mainHeader">

            </div>
            <div className="mainContent">
                <label className='marginTitleNormal'>Please choose a list type</label>

                <div className="typeList">
                    <div className="imgDiv"></div>
                    <div className="dataContainer">
                        <div className="Title">Empty list</div>
                        <div className="data">Let friends write down what they bring</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TypeList;