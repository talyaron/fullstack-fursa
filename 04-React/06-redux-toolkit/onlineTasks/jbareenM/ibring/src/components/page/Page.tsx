import React, { useState } from 'react'
import './Page.scss';

import { select } from '../../features/pageSelector/pageReducer';
import { useAppSelector, useAppDispatch } from '../../app/hooks';

function Page(props: any) {
    const { content, url } = props;
    const dispatch = useAppDispatch();
    const [urlSelected, setUrlSelected] = useState('');

    function handleChoosePage(ev: any) {
        ev.preventDefault();
        dispatch(select({url:url, title: content.title, data: content.data}));
    }

    return (
        <div className="pageContainer" onClick={handleChoosePage}>
            <div className="pageHeader">
                {url !== ""? 
                <img src={url} alt="" />
                : <label>there is no selected image</label>}
            </div>
            <div className="pageContent">
                <div className="pageTitle">{content.title}</div>
                <div className="pageData">{content.data}</div>
            </div>
        </div>
    )
}

export default Page