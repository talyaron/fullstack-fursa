
import React from 'react'
import './storiesComp.scss';

interface Prop {
    name: string;
    description: string;
    image: string;
}

function StoriesComp(prop: Prop) {


    return (
        <div className='storiesCompContainer' >
              
            <div className="vicName"> {prop.name}</div>
            <div className="vicDesc"> {prop.description}</div> 
       <div className="vicImg"> 
          <img className='theVicImg' src={prop.image}></img>
        </div>
        </div>
    )
}

export default StoriesComp