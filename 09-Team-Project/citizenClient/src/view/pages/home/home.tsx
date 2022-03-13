import Button from '@mui/material/Button'
import React from 'react'
import Navbar from '../../components/navbar/navbar'
import CampaignIcon from '@mui/icons-material/Campaign';

import './home.scss'
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate=useNavigate();
    function handleBtn(ev:any){
        console.log(ev)
        navigate(`/emergency`);
    }
    return (
        <div className="home">
            <Navbar />
            <div className="home__content">
                <div className="home__content__btn">
                    <Button  style={{ backgroundColor: "#eb4034" }} variant="contained" startIcon={<CampaignIcon />} onClick={handleBtn}>
                        Emergency
                    </Button>
                    <Button  style={{ borderColor: "#eb4034", color: "#eb655b" }} variant="outlined"  onClick={handleBtn}>Harassment</Button>
                    <Button style={{ borderColor: "#eb4034", color: "#eb655b" }} variant="outlined"  onClick={handleBtn}>Home Violence</Button>
                    <Button style={{ borderColor: "#eb4034", color: "#eb655b" }} variant="outlined"  onClick={handleBtn}>violence event</Button>
                </div>
            </div>
        </div>
    )
}
export default Home