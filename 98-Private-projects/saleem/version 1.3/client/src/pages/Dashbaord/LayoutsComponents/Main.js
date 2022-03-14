import React from 'react';
import { useIntl } from 'react-intl';
import Switch from "react-switch";
import { FaHeart, FaBars } from 'react-icons/fa';



const Main = ({
  handleToggleSidebar,
}) => {
  const intl = useIntl();
  return (
    <main>
      <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
        <FaBars />
      </div>
      
    </main>
  );
};

export default Main;
