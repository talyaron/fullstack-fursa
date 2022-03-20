
import { PinDropSharp } from '@mui/icons-material';
import React, { useState } from 'react'
import './storiesComp.scss';

interface Props {
    name: string;
    description: string;
}

function StoriesComp(props: Props) {
    const [isReadMore, setIsReadMore] = useState(true);
    function toggleReadMore() {
        setIsReadMore(!isReadMore)
    }
    return (
        <div className='storiesCompContainer' >
            <div className="vicName"> {props.name}</div>
            <div className="vicDesc">
                {isReadMore ? props.description.slice(0, 150) : props.description}
                <span onClick={toggleReadMore} className="read-or-hide">
                    {isReadMore ? "...read more" : " show less"}
                </span>
            </div>
        </div>
    )
}

export default StoriesComp