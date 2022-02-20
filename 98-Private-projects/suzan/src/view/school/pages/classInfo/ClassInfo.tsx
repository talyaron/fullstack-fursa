import Typography from '@mui/material/Typography';
import react from 'react-router-dom'
import ClassTabsBar from '../../components/classTabsBar/ClassTabsBar';
import SchoolResponsiveAppBar from '../../components/header/AppBar';
import './ClassInfo.scss';

export default function ClassInfo() {
    return (
        <div className="container">

            <div className="bar">
                <SchoolResponsiveAppBar></SchoolResponsiveAppBar>
            </div>

            <div className="className">
                <Typography variant='h3' align='center'>Class Name</Typography>
            </div>

            <div className="tabsBar">
                <ClassTabsBar></ClassTabsBar>
            </div>

        </div>
    );
}