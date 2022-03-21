import Button from '@mui/material/Button'
import React from 'react'
import Navbar from '../../components/navbar/navbar'
import CampaignIcon from '@mui/icons-material/Campaign';

import './home.scss'
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    function handleBtn(ev: any) {
        const type = ev.currentTarget.value;
        navigate(`/emergency/${type}`);
    }
    return (
        <div className="home">
            <Navbar />
            <div className="home__content">
                <div className="home__content__btn">
                    <Button value="emergency" style={{ backgroundColor: "#eb4034" }} variant="contained" startIcon={<CampaignIcon />} onClick={handleBtn}>
                        Emergency
                    </Button>
                    <Button value="harassment" style={{ borderColor: "#eb4034", color: "#eb655b" }} variant="outlined" onClick={handleBtn}>Harassment</Button>
                    <Button value="homeViolence" style={{ borderColor: "#eb4034", color: "#eb655b" }} variant="outlined" onClick={handleBtn}>Home Violence</Button>
                    <Button value="violenceEvent" style={{ borderColor: "#eb4034", color: "#eb655b" }} variant="outlined" onClick={handleBtn}>Violence Event</Button>
                </div>
            </div>
        </div>
    )
}
export default Home