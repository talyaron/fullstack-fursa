import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {updateText,selectPic} from './picSlice'; 
import './pic.css'


export default function PicShow() {
    const pic = useAppSelector(selectPic)
    const dispatch = useAppDispatch();

    function handleChange(ev: any) {
      const text = ev.target.value;
      dispatch(updateText(text));
    }

  return (
    <div className="outputBox">
      <input type="text" onChange={handleChange}></input>
      <img src={pic}/>
    </div>
  );
}
