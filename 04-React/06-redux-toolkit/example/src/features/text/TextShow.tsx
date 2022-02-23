import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {update,selectText} from './textSlice'; 

export default function TextShow() {
    const text = useAppSelector(selectText)

  return (
    <div className="outputBox">
     <h3>{text}</h3>
    </div>
  );
}
