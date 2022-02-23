import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectImg, selectTxt } from './CardSlice';

export default function CardShow(){
    const imgTxt = useAppSelector(selectImg);
    const imgSrc = useAppSelector(selectTxt);

    return(
        <div className="card">
            <img src={imgSrc} alt="" />
            <h3>{imgTxt}</h3>
        </div>
    );
}