import { useAppDispatch } from "../../app/hooks";
import { update } from './CardSlice';

export default function CardShow() {
    const dispatch = useAppDispatch();

    function handleClick(ev:any) {
        console.log(ev);
        console.log(ev.target.__reactProps$o5eotym4f5q.chidren)
        const imgSrc = '';
        const imgTxt = '';
        dispatch(update([imgSrc, imgTxt]));
    }

    return (
        <div className="cardSelect">
            <div className="card" onClick={handleClick}>
                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" />
                <h3>card 1</h3>
            </div>

            <div className="card" onClick={handleClick}>
                <img src="https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg" alt="" />
                <h3>card 2</h3>
            </div>

            <div className="card" onClick={handleClick}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&usqp=CAU" alt="" />
                <h3>card 3</h3>
            </div>
        </div>

    );
}