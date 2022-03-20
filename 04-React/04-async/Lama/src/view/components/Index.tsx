import React from 'react'
import './index.scss'
interface prop {
    title: string;
    body: string;
}

function Index(prop: prop) {
    const {title , body} = prop;
    return (
        <div className="maindiv">
            {/* <img src={img}></img> */}

            <h5>{title}</h5>
            <h5>{body}</h5>
        </div>
    )
}

export default Index