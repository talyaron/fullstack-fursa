import { useState } from "react";

function MainHeader() {
    return (

        <div className="mainHeader">
            <div className="mainHeader__left">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrw20FQMx2BAdXcvl75-Hs4G2TGcyBuNKvsQ&usqp=CAU" alt="" />
                <p>classes</p>
                <p>students</p>
                <p>teachers</p>
                <p>school's events</p>
            </div>
            <div className="mainHeader__right">
                <p>S.t Joseph Seminary & High School</p>
                <img src="https://c.neh.tw/thumb/f/720/comhiclipartmepgu.jpg" alt="" />
            </div>
        </div>

    );
}

export default MainHeader;