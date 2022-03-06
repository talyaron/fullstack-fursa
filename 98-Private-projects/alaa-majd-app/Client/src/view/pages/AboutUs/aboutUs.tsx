// import './ aboutUs.scss';
import React, { useState } from 'react';
import { Link } from "react-router-dom";



const aboutUs = () => {
    return (
        <div className='warpper'>

            <div>
                <div>
                    <h1>hi every one into abo ali Online market
                    </h1>
                    we have akk products that u want like : fruts and vegetables , meat and fish , organic and healthy , drinks and more other things
                    <div> we are so happy to see you hear </div>
                    <Link to="/homePage"> to home Page</Link>

                </div>
            </div>

        </div>
    )
}


export default aboutUs;