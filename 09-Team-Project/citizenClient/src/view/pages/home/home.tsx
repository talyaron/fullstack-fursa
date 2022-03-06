import Button from '@mui/material/Button'
import React from 'react'
import Navbar from '../../components/navbar/navbar'
import CampaignIcon from '@mui/icons-material/Campaign';

import './home.scss'

function Home() {
    return (
        <div className="home">
            <Navbar />
            <div className="home__content">
                <div className="home__content__btn">
                    <Button style={{ backgroundColor: "#eb4034" }} variant="contained" startIcon={<CampaignIcon />}>
                        Emergency
                    </Button>
                    <Button style={{ borderColor: "#eb4034", color: "#eb655b" }} variant="outlined">Harassment</Button>
                    <Button style={{ borderColor: "#eb4034", color: "#eb655b" }} variant="outlined">Home Violence</Button>
                    <Button style={{ borderColor: "#eb4034", color: "#eb655b" }} variant="outlined">violence event</Button>
                </div>
            </div>
        </div>
    )
}
export default Home