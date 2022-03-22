import './restaurateurDashboard.scss'
import React from 'react'
import { useParams } from 'react-router-dom'
import BarChart from '../../components/charts/bar'
import { getOwnerReserveData } from '../../../app/reducers/resterauntsReducer'
import { useAppSelector } from '../../../app/hooks'

function RestaurateurDashboard() {
    const allReservations = useAppSelector(getOwnerReserveData)
    const { RestaurantId } = useParams()
    const reservatonsInRest = allReservations.filter((a) => {
        if (a.restId == RestaurantId)
            return a
    })
    const hashMap = {}
    reservatonsInRest.forEach((e) => {
        const date = new Date(e.date);
        const dateToString = 'd/m'.replace("d", "" + (date.getDate() + 1)).replace("m", "" + date.getMonth())
    })
    return (<div><BarChart></BarChart></div>)
}

export default RestaurateurDashboard