import React from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
    update,
    updateInput
} from '../card/cardSlice'



function GeneralCard() {
    const dispatch = useAppDispatch();
    function handleInput(e: any) {
        console.log(e.target.value)
        dispatch(updateInput(e.target.value))
    }
    return (
        <div>
            <input type="text" onKeyUp={handleInput}></input>
        </div>
    )

}
export default GeneralCard