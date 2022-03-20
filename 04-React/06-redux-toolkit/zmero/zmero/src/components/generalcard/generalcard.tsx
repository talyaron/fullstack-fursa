import React from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
    update,
    updateInput,
    getProductAsync,
    selectText
} from '../card/cardSlice'



function GeneralCard() {
    const dispatch = useAppDispatch();
    const text = useAppSelector(selectText)
    function handleProduct() {
        dispatch(getProductAsync());
    }
    function handleInput(e: any) {
        console.log(e.target.value)
        dispatch(updateInput(e.target.value))
    }
    console.log(text)
    return (
        <div>
            <div>{text.title}</div>
            <img src={text.image} style={{ width: "10rem" }} ></img>
            <div>
                <button onClick={handleProduct}>click</button>
            </div>

            <input type="text" onKeyUp={handleInput}></input>
        </div >
    )

}
export default GeneralCard