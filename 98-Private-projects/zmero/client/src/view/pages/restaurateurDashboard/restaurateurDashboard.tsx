import './restaurateurDashboard.scss'
import React from 'react'
import { useParams } from 'react-router-dom'
import BarChart from '../../components/charts/bar'
function RestaurateurDashboard() {
    const { RestaurantId } = useParams()
    console.log(RestaurantId)
    return (<div><BarChart></BarChart></div>)
}

export default RestaurateurDashboard