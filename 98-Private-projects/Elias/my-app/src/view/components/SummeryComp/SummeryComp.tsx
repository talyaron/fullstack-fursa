import React from 'react'

import './SummeryComp.scss';

interface article {
    source: {
        id: String;
        name: String;
    },
    author: String,
    title: String;
    description: String;
    url: String;
    urlToImage: String;
    publishedAt: String;
    content: String;

}

const SummeryComp = (props:any) => {

    const{title,description,urlToImage}=props.element;
    return (
        <div className="SummeryCompHeader">
            <img src={urlToImage} alt="" />
            <div className="dSummeryCompName">{title}</div>
            <div className="SummeryCompDiscrepion">{description}</div>
 
        </div>
    )
}

export default SummeryComp