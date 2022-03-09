import { useEffect } from "react";
import axios from 'axios'
import { useAppDispatch } from "../../app/hooks";
import { update } from "./cartSlice";
export default function cartInput()
{
    const dispatch = useAppDispatch();
    useEffect(()  => {
        axios.get('http://localhost:3004/userOrder').then(({data})=>  dispatch(update(data)));
        }, []);
       
       
    return (
        <div></div>
    )
}