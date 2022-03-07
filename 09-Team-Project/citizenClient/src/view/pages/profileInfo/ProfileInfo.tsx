import React from "react";
import Navbar from "../../components/navbar/navbar";
import "./ProfileInfo.scss";

function ProfileInfo() {
  return (
    <div className="ProfileInfo">
        <Navbar />
            <div className="ProfileInfo__content">
               <p>
                Profile
               </p>
            </div>
    </div>
  );
}
export default ProfileInfo;
