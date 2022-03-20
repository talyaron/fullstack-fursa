import react from 'react'
import Layout from '../Layout';
import {NewsBar} from './Components/NewsBar' 
import { useIntl } from 'react-intl';
import { Projectspresent } from './Components/Projectspresent';



import { DashbboardGraphs } from './graphs/DashboardGraphs';

import "./style/Tasks.scss"


interface layoutFn{
    langfunc:any
}
const userName = "saleem"

function Tasks(props:layoutFn)
{
    const intl = useIntl();
    return (
        
        <div className='TasksCont'>
        <Layout setLocale={props.langfunc} ></Layout>

        <div className='TaskPanel'>
        <header>
        <h2>{intl.formatMessage({ id: 'morning' })}</h2><h4>{userName}</h4>
        </header>
        <div className='content'>
        <div className='detailedProjects'>
            <Projectspresent></Projectspresent>
            <div className='detailedProjectsfooter'><a href="">All..</a></div>
            
        </div>

        <div className='total'>
        <DashbboardGraphs></DashbboardGraphs>
        </div>

        </div>
      
        </div>
        <div className='newsBar'>
            <NewsBar></NewsBar>
        </div>
        </div>



        )
}
export default Tasks;