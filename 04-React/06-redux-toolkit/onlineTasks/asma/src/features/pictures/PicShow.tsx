import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {update,selectText} from './picSlice'; 

export default function PicShow() {
    const pic = useAppSelector(selectText)

  return (
    <div className="outputBox">
     <img src={pic}/>
    </div>
  );
}
