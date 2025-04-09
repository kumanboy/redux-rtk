import React from 'react'
import {useGetProductByIdQuery} from "../app/services/dummydata.js";

const SpecificProduct = () => {
    const {data,isError,isLoading} = useGetProductByIdQuery(3)
    console.log(data)
    if (isError) {
        return <h1>Error</h1>
    }

    if (isLoading) {
        return <h1>Loading...</h1>
    }
    return (
        <div>
            <h1>{data?.title}</h1>
        </div>
    )
}
export default SpecificProduct
