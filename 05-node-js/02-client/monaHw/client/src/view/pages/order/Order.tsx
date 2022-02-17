
import React from 'react'
import {useParams} from 'react-router-dom';

// const woods = [{name:'pine wood',height:70,width:70, thick:70,cardImg:'https://d2kxk2c617i0nn.cloudfront.net/image_resize/crop/mw1500/mh750/products/23_001--yellow_pine_softwood-s.jpg'},
// {name:'insulation wood',height:70,width:70, thick:70,cardImg:'https://www.greenspec.co.uk/images/web/materials/boards/board.jpg'},
// {name:'multiLayer wood',height:70,width:70, thick:70,cardImg:'https://user-assets.sxlcdn.com/images/609056/FkbWNKuLffuq6lYY2qFlQ5bAGYJY.jpg?imageMogr2/strip/auto-orient/thumbnail/1200x9000%3E/quality/90!/interlace/1/format/jpg'}];
function Order(){
    const {name} = useParams();
    return(
        <h1>order {name}</h1>
    );
}
export default Order