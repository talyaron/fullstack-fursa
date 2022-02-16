import React from 'react'
import Card from '../../components/restaurantCard/restaurantCard';
import Search from '../../components/search/search'
import Navbar from '../../components/menu/menu';
import Location from './location.svg'

import './explore.scss'
interface cardProp {
    id: number;
    name: string;
    image: string;
    booking: number;
}

const Data: Array<cardProp> = [{ id: 1, name: 'shila-sharon cohen Kitchen & bar', image: 'https://media-cdn.tripadvisor.com/media/photo-s/03/7a/47/6d/shila.jpg', booking: 27 },
{ id: 2, name: 'Cafe Popular', image: 'https://cdn.archilovers.com/projects/c_383_f83bb625-ff28-414b-a700-8e4bebde941b.jpg', booking: 22 },
{ id: 3, name: 'Taizu', image: 'https://bestrest.rest/wp-content/uploads/2019/05/TAIZU_017.jpg', booking: 20 },
{ id: 5, name: 'Hakosem', image: 'https://cdn.istores.co.il/image/upload/if_ar_gt_2:1/c_fill,h_662,w_555/c_fill,h_662,w_555/if_else/c_fill,q_100,w_555/if_end/dpr_2/v1614106887/clients/109701/5e9b9717137eea988b88592d0861cc3a64d59fcd.jpg', booking: 15 }, { id: 4, name: 'La Regence', image: 'https://images.jpost.com/image/upload/f_auto,fl_lossy/t_JM_ArticleMainImageFaceDetect/399693', booking: 5 }]
function explore() {
    return (
        <div>
            <Navbar></Navbar>
            <Search></Search>
            <div className="exploremain">
                <div className="exploremain__location">
                    <h5>It looks like you're in Israel. Not Correct?</h5>
                    <div className="exploremain__location__get">
                        <img src={Location}></img>
                        <h5>Get current location</h5>
                    </div>
                </div>
                <div className="exploremain__popular">
                    <header>
                        <h2>Popular Restaurants in Israel</h2>
                        <div className="exploremain__popular__view">View All</div>
                    </header>
                    <div className="exploremain__popular__grid">
                        {Data.map((rest, index) => {
                            return <Card key={index} id={rest.id} name={rest.name} image={rest.image} booking={rest.booking}></Card>
                        })}
                    </div>
                </div>
                <div className="exploremain__restaurateurs">
                    <div className="exploremain__restaurateurs__background">
                        <div className="exploremain__restaurateurs__background__color"></div>
                        <h2>Restaurateurs join us</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default explore