import './ViewList.scss';
import{useEffect, useState} from'react';
import useCollapse from 'react-collapsed';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../app/hooks';
import { changeNavText } from '../../../app/reducer/NavTextReducer';


//to do side menu
//

interface list{
        catInlList: string;
    
  }

function ViewList() {
    const listContent:Array<list>=[{catInlList:"Essentials"},{catInlList:"Clothes"},{catInlList:"Care"},{catInlList:"Accessories"}];
    const [showResults, setShowResults] = useState(false);
    const nav = useNavigate();
    const {state}:any = useLocation();

    

    const dispatch = useAppDispatch();

        useEffect(() => {
            dispatch(changeNavText("NYC,oct 6th 2021,Trolly"));
        }, [dispatch]);


    function clickSignup(e:any){
        setShowResults(true);
        nav('/Signup', {
            state: state
        });

}
const Results = () => (
    <div id="results" className="search-results">
           <h2>Travel is the only thing you buy that makes you richer</h2> 
    </div>
  )

    return (
        <div className="wrapper ">

            <div className="date">NYC,oct 6th 2021,Trolly</div>
            <div className="listheader">
                {listContent.map((element, index) => {
                return(
                 <Collapsible key={index} catInlList={element.catInlList} />
                  );
                 })}
            </div>
                 <div className='congratMsgt'>
                <h1>Congrats!</h1>
                <p>to save/edit, plase sign up </p> 
                 </div>

            <button className='signUpbtn' onClick={clickSignup}> Free Sign up to save & edit</button>
            <div>
                 { showResults ? <Results /> : null }
            </div>
            
        </div>
    );
    

    
}


function Collapsible(props:list){
    const {catInlList}=props;
    const [ isExpanded, setExpanded ] = useState(false);
    const [ catTitle, setEcatTitle ] = useState('▲'+catInlList);
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
    function handleOnClick() {
        setExpanded(!isExpanded);
        if(isExpanded){
            setEcatTitle('▲'+catInlList);
        }
        else{
            setEcatTitle('▼'+catInlList);
        }
    }
    
    return (

    <div className="collapsible">
             <div className="header" {...getToggleProps({onClick: handleOnClick})}>
              {catTitle}
             </div>
             <div {...getCollapseProps()}>
                <div className="content">
                    Now you can see the hidden content. <br/><br/>
                    Click again to hide...
                </div>
             </div>
        </div>
    );
}

export default ViewList;