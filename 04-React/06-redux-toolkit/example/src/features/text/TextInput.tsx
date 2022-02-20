import { useAppDispatch } from "../../app/hooks";
import {update, getJokeAsync} from './textSlice'; 

export default function TextShow() {
    const dispatch = useAppDispatch();

  function handleInput(ev: any) {
    const text = ev.target.value;
    dispatch(update(text));
  }

  function handleJoke(){
    dispatch(getJokeAsync());
  }
  return (
    <div className="inputBox">
      <input type="text" placeholder="Enter text" onKeyUp={handleInput} />
      <button onClick={handleJoke}>Get Joke</button>
    </div>
  );
}
