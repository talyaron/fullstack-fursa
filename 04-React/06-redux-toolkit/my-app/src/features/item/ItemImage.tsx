import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectText, update } from "./ItemSlice";
import './ItemImage.scss';

const images = [{image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg", title: 'image1'},
    {image: "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg", title: 'image2'},
    {image: "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_1280.jpg", title: 'image3'}]

export default function ItemImage() {
    const dispatch = useAppDispatch();
    const text = useAppSelector(selectText);

    function handleSelect(ev:any){
        const item = ev.target.src;
        dispatch(update(item));
    }

    return (
        <div className="wrapper">
            {images.map((item, index) => {
                return(
                    <div key={index} className='box'>
                        <img src={item.image} alt="" onClick={handleSelect}/>
                        <p>{item.title}</p>
                        <p>{text}</p>
                    </div>
                )
            })}
            {/* <div className='box' onClick={handleSelect}>
                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt=""/>
                <p>Image 1</p>
            </div>
            <div className='box' onClick={handleSelect}>
                <img src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg" alt=""/>
                <p>Image 2</p>
            </div>
            <div className='box' onClick={handleSelect}>
                <img src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_1280.jpg" alt=""/>
                <p>Image 3</p>
            </div> */}
        </div>
    )
}