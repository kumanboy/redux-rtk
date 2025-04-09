import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {increment,decrement} from "../app/features/counter/counterSlice.js";

const Counter = () => {
    // Datani storedan o'qish
    const count = useSelector((state) => state.counter.value)
    // Actionlar orqali datani ozgartirib jonatish
    const dispatch = useDispatch()
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=> dispatch(increment())}>+</button>
            <button onClick={()=> dispatch(decrement())}>-</button>
        </div>
    )
}
export default Counter
