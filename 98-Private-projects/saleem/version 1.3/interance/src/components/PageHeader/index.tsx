import React from 'react'
import backIcon from '../../assets/images/icons/back.svg'
import logoImg from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import './sytle.css'
interface PageHeaderProps{
    title:string;
    children?: React.ReactNode;
    description?:string
}

export function PageHeader (props:PageHeaderProps){
    return(
        <header className="page-header">
        <div className="top-bar-container">
            <Link to='/main'>
                <img src={backIcon} alt='back'></img>
            </Link>
            <img src={logoImg} alt='onTime'></img>
        </div>

        <div className="header-content">
            <strong>{props.title}</strong>
            {props.description && <p>{props.description}</p>}
            {props.children}
        </div>
    </header>
    )
}