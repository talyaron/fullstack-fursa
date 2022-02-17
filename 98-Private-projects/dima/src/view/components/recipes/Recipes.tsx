import addIcon from './add.png';
import img1 from './1.jpg';
import img2 from './2.jpg';
import img3 from './3.jpg';
import img4 from './4.jpg';
import img5 from './5.jpg';
import './recipes.scss';

function Recipes() {

    return (
        <div className="recipes">
            <h2 className='title'>Recipes</h2>
            <div className="row1">
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
            </div>
            <div className="row2">
                <div className="item">
                    <div className='itemImg'><img src={img4} alt="" /></div>
                    <div className='title'><p>recipe 4</p></div>
                </div>
                <div className="item">
                    <div className='itemImg'><img src={img5} alt="" /></div>
                    <div className='title'><p>recipe 5</p></div>
                </div>
            </div>
            <div className="add"><img src={addIcon} alt="" /></div>
        </div>
    );
}

export default Recipes;