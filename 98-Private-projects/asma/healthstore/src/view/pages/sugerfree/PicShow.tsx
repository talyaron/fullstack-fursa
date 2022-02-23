import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import {selectPic, selectTreatment } from '../../../features/treatment/treatmentSlice';
import './pic.scss'


export default function PicShow() {
    const pic = useAppSelector(selectPic);

    return (
      <div className="outputBox">
        <img src={pic}/>
      </div>
    );
}
