import { CircularProgress } from "@mui/material";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { getUser } from "../../../features/user/userReducer"
import { fetchUserOrders, userOrders } from "../../../features/userOrders/UserOrders"
import { UserOrdersComp } from "../../components/userOrdersComp/UserOrdersComp";

export function UserOrders(){
    const user=useAppSelector(getUser)
    const dispatch=useAppDispatch();
    useEffect(()=>{
        dispatch(fetchUserOrders())

    },[])    
    const orders=useAppSelector(userOrders)
    return(
        <div>
 {orders.status!=='loading' ?
                orders.orders.map((order: any, i: any) => {

                    return <UserOrdersComp key={order._id} _id={order._id} date={order.date} cash={order.cash} creditCard={order.creditCard} pickUp={order.pickUp} delivery={order.delivery}></UserOrdersComp>
                }):  <div><CircularProgress color="secondary" />
                </div>}
        </div>
    )
}