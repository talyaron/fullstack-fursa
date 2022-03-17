import React from "react";
import './profile.scss'
import { useAppSelector } from "../../../app/hooks";
import { selectUser } from "../../../app/reducers/userReducer";
import NavBar from '../../components/menu/menu'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function Profile() {
    const userInfo = useAppSelector(selectUser)
    const [expanded, setExpanded] = React.useState("");
    const handleChange = (panel: any) => (event: any, isExpanded: any) => {
        setExpanded(isExpanded ? panel : false);
    };
    let fullName = userInfo.fName.charAt(0).toUpperCase() + userInfo.fName.slice(1) + " " + userInfo.lName.charAt(0).toUpperCase() + userInfo.lName.slice(1)
    return (
        <div className="profile">
            <NavBar />
            <div className="profile__content">
                <div className="profile__content__title">
                    <h6>
                        Welcome {fullName}</h6>
                </div>
                <div className="profile__content__tabs">
                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography sx={{ width: '70%', flexShrink: 0 }}>
                                Personal details
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>

                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}

export default Profile;