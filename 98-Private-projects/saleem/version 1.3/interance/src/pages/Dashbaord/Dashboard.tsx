import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import { ProSidebar, SidebarHeader, SidebarFooter, SidebarContent, Menu,MenuItem,SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import './Dashboard.scss'
import Layout from './Layout';
import page1 from './components/DashboardPanel';
import { Routes ,Route } from 'react-router-dom';
import Tasks from './panels/Tasks';

const messages:any =  require('./messages.js').default;


function Dashboard() {
  const [locale, setLocale] = useState('en');
  
  return (

    <IntlProvider locale={locale} messages={messages[locale]}>

    <Tasks langfunc={setLocale} />
    
    </IntlProvider>)
}

export default Dashboard;
