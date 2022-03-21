import { useAppDispatch } from "../../app/hooks";
//import {update, getJokeAsync} from './textSlice'; 

export default function PicturesShow() {
    const dispatch = useAppDispatch();

  function handleClick(ev: any) {
    const pic = ev.target.value;
   // dispatch(update(pic));
  }
  return (
    <div className="inputBox">
        <div><img src="https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg" onClick={handleClick} /></div>
        <div><img src="https://media.istockphoto.com/photos/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-picture-id1093110112?k=20&m=1093110112&s=612x612&w=0&h=3OhKOpvzOSJgwThQmGhshfOnZTvMExZX2R91jNNStBY=" onClick={handleClick} /></div>
      
    </div>
  );
}