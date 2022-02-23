import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {selectText, selectTextStauts} from './textSlice'; 

export default function TextShow() {
    const text = useAppSelector(selectText);
    const status = useAppSelector(selectTextStauts);

  return (
    <div className="outputBox">
     <h3>{text}</h3>
     <h4>{status}</h4>
    </div>
  );
}
