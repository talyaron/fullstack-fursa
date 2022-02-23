import React, { useState } from 'react'
import './Page.scss';

import { select } from '../../features/pageSelector/pageReducer';
import { useAppSelector, useAppDispatch } from '../../app/hooks';

function Page(props: any) {
    const { url } = props;
    const dispatch = useAppDispatch();
    const [urlSelected, setUrlSelected] = useState('');

    function handleChoosePage(ev: any) {
        ev.preventDefault();
        dispatch(select(url));
    }

    return (
        <div className="pageContainer" onClick={handleChoosePage}>
            <div className="pageHeader">
                <img src={url} alt="" />
            </div>
            <div className="pageContent">
                content
            </div>
        </div>
    )
}

export default Page