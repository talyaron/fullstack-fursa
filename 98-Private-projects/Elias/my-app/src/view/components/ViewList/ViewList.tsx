import './ViewList.scss';
import { useEffect, useState } from 'react';
import useCollapse from 'react-collapsed';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../app/hooks';
import { changeNavText } from '../../../app/reducer/NavTextReducer';
import ItemInList from '../ItemInList/ItemInList'


//to do side menu
//

interface list {
    catInlListName: string;
    incatList: Array<item>;

}
interface item {
    name: string;
    quantity: number;

}

function ViewList() {
    const listContent: Array<list> =
        [
            {
                catInlListName: "Essentials",
                incatList: [{ name: "Passport", quantity: 1 }, { name: "Mobile", quantity: 1 }, { name: "Wallet", quantity: 1 }, { name: "Coins", quantity: 1 }]
            },
            {
                catInlListName: "Clothes",
                incatList: [{ name: "Shirt", quantity: 6 }, { name: "Pants", quantity: 3 }, { name: "Underwear", quantity: 6 }]
            },
            {
                catInlListName: "Care",
                incatList: [{ name: "Conditioner", quantity: 1 }, { name: "Shampoo", quantity: 1 }, { name: "soap", quantity: 1 }, { name: "Tooth paser & brush", quantity: 1 }]
            },
            {
                catInlListName: "Accessories",
                incatList: [{ name: "Shoes", quantity: 1 }, { name: "Phone charger", quantity: 1 }, { name: "Earphones", quantity: 1 }, { name: "Cat cage", quantity: 1 }]
            }
        ];
    const [showResults, setShowResults] = useState(true);

    const [isExpanded, setExpanded] = useState(true);
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
    const nav = useNavigate();
    const { state }: any = useLocation();



    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(changeNavText("NYC,oct 6th 2021,Trolly"));
    }, [dispatch]);


    function clickSignup(e: any) {
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

            <div className="listheader">
                {listContent.map((element, index) => {
                    return (
                        <Collapsible key={index} catInlListName={element.catInlListName} incatList={element.incatList} />
                    );
                })}
                <div className="collapsible notlist ">
                    <div className="notlist" {...getToggleProps()}>
                    </div>
                    <div {...getCollapseProps()}>
                        <div className="content">
                            <div className="notlist">
                                <div className='congratMsgt'>
                                    <h1>Congrats!</h1>
                                    <p>to save/edit, plase sign up
                                    </p>
                                </div>

                                <button className='signUpbtn' onClick={clickSignup}>
                                    Free Sign up to save & edit</button>
                                <div>
                                    {showResults ?
                                        <Results />
                                        : null}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );



}


function Collapsible(props: list) {
    const { catInlListName, incatList } = props;
    const [isExpanded, setExpanded] = useState(false);
    const [catTitle, setEcatTitle] = useState('▲' + catInlListName);
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
    function handleOnClick() {
        setExpanded(!isExpanded);
        if (isExpanded) {
            setEcatTitle('▲' + catInlListName);
        }
        else {
            setEcatTitle('▼' + catInlListName);
        }
    }

    return (

        <div className="collapsible">
            <div className="header" {...getToggleProps({ onClick: handleOnClick })}>
                {catTitle}
            </div>
            <div {...getCollapseProps()}>
                <div className="content">
                    {incatList.map((element, index) => {
                        return (
                            <ItemInList key={index} name={element.name} quantity={element.quantity} />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default ViewList;