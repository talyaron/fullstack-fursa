import { useAppSelector } from "../../app/hooks";
import { selectImage } from "./ItemSlice";


export default function ItemShow(){
    //const text = useAppSelector(selectText);
    const image = useAppSelector(selectImage);

    return(
        <div className="showItem">
            <img src={image} alt="" />
            {/* <p>{text}</p> */}
        </div>
    )
}