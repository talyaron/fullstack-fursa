import img1 from '../../images/1.jpg';
import img2 from '../../images/2.jpg';
import img3 from '../../images/3.jpg';
import img4 from '../../images/4.jpg';
import img5 from '../../images/5.jpg';
import Tooltip from '@mui/material/Tooltip';
import './Recipes.scss';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Link } from 'react-router-dom';

export default function Recipes() {

    return (
        <div className="recipes">
            <h2 className='title1'>Recipes</h2>
            <div className='add'>
                <Tooltip title='add new recipe'>
                    <Link to='/NewRecipe'>
                        <AddCircleOutlineIcon sx={{ fontSize: 40, color: '#b5739d' }} />
                    </Link>
                </Tooltip>
            </div>
            <div className="item">
                <div className='itemImg'><img src={img1} alt="" /></div>
                <div className='title'><p>recipe 1</p></div>
            </div>
            <div className="item">
                <div className='itemImg'><img src={img2} alt="" /></div>
                <div className='title'><p>recipe 2</p></div>
            </div>
            <div className="item">
                <div className='itemImg'><img src={img3} alt="" /></div>
                <div className='title'><p>recipe 3</p></div>
            </div>
            <div className="item">
                <div className='itemImg'><img src={img4} alt="" /></div>
                <div className='title'><p>recipe 4</p></div>
            </div>
            <div className="item">
                <div className='itemImg'><img src={img5} alt="" /></div>
                <div className='title'><p>recipe 5</p></div>
            </div>
        </div>
    );
}