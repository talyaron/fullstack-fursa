import logoImg from './logo-removebg-preview.png' 
import './Image.scss';
const ImageCop =  (props) => {

    return <img className ='logoImage' src={logoImg}/>
}


export const Aa = ({count}) => {
    return <div style={{ backgroundColor : "red"}}>omar {count}</div>
}


export default ImageCop;