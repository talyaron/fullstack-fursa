import { useAppDispatch } from "../../app/hooks";
import {update, getJokeAsync} from '../../app/reducers/textSlice'; 

export default function HelpShow() {
    const dispatch = useAppDispatch();

  function handleInput(ev: any) {
    const text = ev.target.value;
    dispatch(update(text));
  }

  function handleJoke(ev: any){
        ev.preventDefault();
     const id = ev.target;
    dispatch(getJokeAsync(id));
  }
  return (
    <div className="inputBox">
      <input type="text" placeholder="Enter text" onKeyUp={handleInput} />
      <button onClick={handleJoke}>
       <img src="https://static.zara.net/photos///mkt/misc/help/icons//icon-80-help-shipping.svg?ts=1550654368093" alt="" />
       DELIVERY METHODS AND COSTS
      </button>
    </div>
  );
}
