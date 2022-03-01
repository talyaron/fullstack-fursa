import { useAppDispatch } from "../../app/hooks";
import { update } from './textSlice';
//import { update, getJokeAsync } from "../../app/reducers/textSlice";

export default function TextShow() {
  const dispatch = useAppDispatch();

  function handleInput(ev: any) {
    //const text = ev.target.value;
    //dispatch(update(img));

    //dispatch(update(text));

    const text = '';
    const img = '';
    dispatch(update([text, img]));
  }

 
  return (
    <div className="text2" onClick={handleClick}> 
     
      <img
        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        alt=""
      />

    </div>
  );
}
