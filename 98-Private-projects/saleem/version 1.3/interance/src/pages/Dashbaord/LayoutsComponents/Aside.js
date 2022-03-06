import React from 'react';
import { useIntl } from 'react-intl';
import Switch from "react-switch";
import { Link } from 'react-router-dom';
import MainPage from '../panels/MainPage';
import Tasks from '../panels/Tasks';
import { Route,Routes,Outlet, useNavigate } from 'react-router-dom';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';
import { FaTachometerAlt, FaGem, FaList, FaGithub, FaRegLaughWink, FaHeart } from 'react-icons/fa';
import sidebarBg from   '../assets/bg2.jpg';

const Aside = ({ image, collapsed, rtl, toggled, handleToggleSidebar,handleCollapsedChange,handleRtlChange,
   handleImageChange }) => {
  const intl = useIntl();
  const navigate = useNavigate();
  function navigateToTasks()
  {
    console.log("SS")
  }
  return (
    
      <ProSidebar
        image={image ? sidebarBg : false}
        rtl={rtl}
        collapsed={collapsed}
        toggled={toggled}
        breakPoint="md"
        onToggle={handleToggleSidebar}
      >
        <SidebarHeader>
          <div
            style={{
              padding: '24px',
              textTransform: 'uppercase',
              fontWeight: 'bold',
              fontSize: 14,
              letterSpacing: '1px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {intl.formatMessage({ id: 'onTime' })}
          </div>
        </SidebarHeader>
        <SidebarContent>
          <Menu iconShape="circle">
          <MenuItem  onclick={navigateToTasks}
              icon={<FaTachometerAlt />}
            >
              {intl.formatMessage({ id: 'dashboard' })}
            </MenuItem>
           
            <MenuItem onclick={navigate("/dashboard/tasks")} icon={<FaGem />}> {intl.formatMessage({ id: 'tasks' })}</MenuItem>
          </Menu>
          <Menu iconShape="circle">
            <SubMenu
              title={intl.formatMessage({ id: 'social' })}
              icon={<FaRegLaughWink />}
            >
              <MenuItem>{intl.formatMessage({ id: 'submenu' })} 1</MenuItem>
              <MenuItem>{intl.formatMessage({ id: 'submenu' })} 2</MenuItem>
              <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3</MenuItem>
            </SubMenu>
            <SubMenu
              title={intl.formatMessage({ id: 'activities' })}
              icon={<FaHeart />}
            >
              <MenuItem>{intl.formatMessage({ id: 'submenu' })} 1</MenuItem>
              <MenuItem>{intl.formatMessage({ id: 'submenu' })} 2</MenuItem>
              <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3</MenuItem>
            </SubMenu>
            <SubMenu title={intl.formatMessage({ id: 'account' })} icon={<FaList />}>
              <MenuItem>{intl.formatMessage({ id: 'submenu' })} 1 </MenuItem>
              <MenuItem>{intl.formatMessage({ id: 'submenu' })} 2 </MenuItem>
              <SubMenu title={`${intl.formatMessage({ id: 'submenu' })} 3`}>
                <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.1 </MenuItem>
                <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.2 </MenuItem>
                <SubMenu title={`${intl.formatMessage({ id: 'submenu' })} 3.3`}>
                  <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.3.1 </MenuItem>
                  <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.3.2 </MenuItem>
                  <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.3.3 </MenuItem>

                </SubMenu>
              </SubMenu>
            </SubMenu>
            <MenuItem> <Switch
              height={16}
              width={30}
              checkedIcon={false}
              uncheckedIcon={false}
              onChange={handleCollapsedChange}
              checked={collapsed}
              onColor="#219de9"
              offColor="#bbbbbb" />{intl.formatMessage({ id: 'collapsed' })} </MenuItem>




          </Menu>
        </SidebarContent>

        <SidebarFooter style={{ textAlign: 'center' }}>
          <div
            className="sidebar-btn-wrapper"
            style={{
              padding: '20px 24px',
            }}
          >

          </div>
          <MenuItem>{intl.formatMessage({ id: 'language' })} <Switch
            height={16}
            width={30}
            checkedIcon={false}
            uncheckedIcon={false}
            onChange={handleRtlChange}
            checked={rtl}
            onColor="#219de9"
            offColor="#bbbbbb" /> </MenuItem>
          <MenuItem>{intl.formatMessage({ id: 'image' })}  <Switch
            height={16}
            width={30}
            checkedIcon={false}
            uncheckedIcon={false}
            onChange={handleImageChange}
            checked={image}
            onColor="#219de9"
            offColor="#bbbbbb" /> </MenuItem>
        </SidebarFooter>
      </ProSidebar>
    
  );
}

export default Aside;
