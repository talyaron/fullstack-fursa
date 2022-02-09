import React from 'react'


function search() {
    return (
        <div className="searchDiv">
            <div className="searchDiv__bar">
                <h1 className="searchDiv__title">Find Your Table</h1>
                <div className="searchDiv__bar__content">
                    <div className="searchDiv__bar__content__a">
                        <input className="searchDiv__bar__content__a__input" type="text" placeholder=" Search For Food or Restaurant" name="search" />
                    </div>
                    <div className="searchDiv__bar__content__b">
                        <button className="searchDiv__bar__content__b__btn"> Search</button>
                    </div>
                </div>
            </div>
        </div >
    );

}

export default search;