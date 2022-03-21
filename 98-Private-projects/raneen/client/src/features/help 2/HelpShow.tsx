import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {selectHelp} from '../../app/reducers/helpSlice'; 

export default function HelpShow() {
    const help = useAppSelector(selectHelp);
  //  const status = useAppSelector(selectTextStauts);

  return (
    <div className="outputBox">

     <h3>{help}</h3>
    </div>
  );
}
