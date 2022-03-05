import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectImage, updateText } from "./ItemSlice";
import './ItemShow.scss';


export default function ItemShow(){
    const dispatch = useAppDispatch();
    const image = useAppSelector(selectImage);

    function handleText(ev:any){
        const text = ev.target.value;
        dispatch(updateText(text));
    }

    return(
        <div className="showItem">
            <input type="text" onChange={handleText}/>
            <img src={image} alt="" style={{width: '30vw'}}/>
            {/* <p>{text}</p> */}
        </div>
    )
}