import react, { useState } from 'react'
import { IntlProvider } from 'react-intl';
import Layout from '../Layout';
import Aside from '../LayoutsComponents/Aside';
import {NewsBar} from './Components/NewsBar' 

import { Projectspresent } from './Components/Projectspresent';



import { DashbboardGraphs } from './graphs/DashboardGraphs';

import "./style/Tasks.scss"


interface layoutFn{
    langfunc:any
}

const messages:any =  require('../messages.js').default;
function TaskDetailed(props:layoutFn)
{const [locale, setLocale] = useState('en');
    return (
        
       
        <IntlProvider locale={locale} messages={messages[locale]}>

        <Layout setLocale={props.langfunc} ></Layout>
        
        </IntlProvider>)

      



        
}
export default TaskDetailed;