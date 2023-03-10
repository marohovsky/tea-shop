import { useState } from "react";
import { useSelector } from "react-redux";
import OneItemCart from "./OneItemCart";
import { Store } from "redux";
import { store } from "@/store";


let allItems=[]
const ItemCart = () =>{ 
    const ArrItems = useSelector(state => state.shopingArr)
    const countItems = useSelector(state => state.count)
   
    allItems = ArrItems.map((item:any)=>{
        return <OneItemCart key={item.id} item={item}/>  
    })
    const orderDispatch = () =>{
        console.log(store.getState())
    }
    return(
        <div className="w-[600px] min-h-[200px] p-2 mx-auto border-2 bg-slate-200 bg-opacity-75 absolute z-[1] top-[110px] right-0">
            <ul className="flex flex-col gap-2">
                {allItems.length == 0 ? <p>Корзина пуста</p>: allItems} 
            </ul>
            {store.getState().shopingArr.length != 0 ? <button className="w-[200px] h-[50px] mx-auto mt-2 bg-green-900 block" onClick={()=> orderDispatch()}>Придбати</button> : null}
            
        </div>
    )
}
export default ItemCart;