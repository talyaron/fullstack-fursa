import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {selectText, selectImg} from './textSlice'; 

export default function TextShow() {
    const text = useAppSelector(selectText);
    //const status = useAppSelector(selectTextStauts);
    const img = useAppSelector(selectImg);

  return (
    <div className="text2">
    <img src={img} alt="" />
     <h3>{text}</h3>
    </div>
  );
}
