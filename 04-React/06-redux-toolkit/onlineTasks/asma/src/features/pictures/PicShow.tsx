import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {update,selectPic} from './picSlice'; 

export default function PicShow() {
    const pic = useAppSelector(selectPic)

  return (
    <div className="outputBox">
     <img src={pic}/>
    </div>
  );
}
