import react from 'react'
import Layout from '../Layout';
import { DashbboardGraphs } from './graphs/DashboardGraphs';
import "./style/Tasks.scss"


interface layoutFn{
    langfunc:any
}
const userName = "saleem"
function Tasks(props:layoutFn)
{
    
    return (
        
        <div className='TasksCont'>
        <Layout setLocale={props.langfunc} ></Layout>

        <div className='TaskPanel'>
        <header>
        <h2>Good morning </h2><h4>{userName}</h4>
        </header>
        <div className='content'>
        <div className='total'>
        <DashbboardGraphs></DashbboardGraphs>
        </div>
        </div>
        </div>
        </div>



        )
}
export default Tasks;