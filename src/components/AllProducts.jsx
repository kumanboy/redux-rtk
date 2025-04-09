import React from 'react'
import {useGetAllProductQuery} from "../app/services/dummydata.js";

const AllProducts = () => {
    const {data,isError,isLoading} = useGetAllProductQuery()

    if (isError) {
        return <h1>Error</h1>
    }

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            {data?.products.map((product) => (
                <h1 key={product.id}>{product.title}</h1>
            ))}
        </div>
    )
}
export default AllProducts
