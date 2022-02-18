import './MainScreen.scss';
import Bagemenu from '../../components/menuBar/menu';

export default function MainScreen(){
    return(
        <div className="wrapper">
            <div className='menuBar'>
                <Bagemenu />
            </div>
            //Add new component
        </div>
    );
}