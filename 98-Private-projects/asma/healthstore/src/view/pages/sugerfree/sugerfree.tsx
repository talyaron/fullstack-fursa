import './sugerfree.scss'
import PicShow from './PicShow';
import ProductCard from './productCard'


function SugerFree(){

  return (
    <div className="freesuger">
        <h1>Suger Free</h1>
        <div className='freesuger__product'>
          <ProductCard  name=""  img="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2020%2F02%2Fsugarfreeproducts.jpg" />
          <ProductCard  name=""  img="https://world.openfoodfacts.org/images/products/380/006/571/8592/front_en.3.400.jpg"/>
          <ProductCard  name=""  img="https://sibuchocolate.com/wp-content/uploads/2019/12/Sugar-Free-Chocolate.jpg" />  
        </div>
        <PicShow/>

    </div>
  );
}

export default SugerFree;