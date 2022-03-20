import React, { useEffect } from "react";
import { useIntl } from 'react-intl';
import './style/Projectspresent.scss'
import { useAppSelector, useAppDispatch } from '../../../../app/hooks';
import   { getProjectAsync,selectProjects }  from '../../../../features/tasks/TasksReducer';

export function Projectspresent(){
  
  const projects = useAppSelector(selectProjects)
  const dispatch = useAppDispatch();
  const intl = useIntl();
  
    useEffect(() => {
      dispatch(getProjectAsync());
  }, [])
   


    function getRandomColor() {
        let color = "hsl(" + Math.random() * 360 + ", 100%, 75%)";
        return color;
      }
    return(
      
      <div className="Projectspresent">
            <h2>{intl.formatMessage({ id: 'activeProjects' })}</h2>
      <div className="page-wrapper d-flex">
          
                  {
                   projects.map((proj:any, index:number) => (
                    <div className="card" style={{backgroundColor: getRandomColor()}}>
                      <div className="card-body">
                      
                      <div className="days-left">{intl.formatMessage({ id: 'DaysLeft' })}: {proj.daysleft}</div>
                      <br/>
                                <div className="name"> {proj.name}</div>
                                <p className="text-muted">{proj.textmuted}</p>
                                <br/>
                                <div className="profile-images">
                                    {
                                    proj.participant.map((image:any, imageNum:number)=> (
                                    <img className="profile-image" src={image.img} alt={image.name}/>
                                    ))
                                    }
                                
                                
                                    
                                </div>
                                <div className="editproject">
                                </div>

                            </div>
                        </div>



                ))}
                                
                 
                </div>
                </div>
                   

                  
                    
                    
    )

}