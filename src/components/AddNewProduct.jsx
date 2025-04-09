import {useAddNewProductMutation} from "../app/services/dummydata.js";
import React from "react";

const AddNewProduct = () => {
    const [addNewProduct, { data, isError, isLoading }] =
        useAddNewProductMutation();

    if (isError) {
        return <h1>Error</h1>
    }

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    const handleAddProduct = async () => {
        try {
            const newProductData = {
                id: 1,
                title: "Amazing T-Shirt",
                description:
                    "This is one of the best and amazing t-shirt in the market",
            };

            await addNewProduct(newProductData);
        } catch (err) {
            console.error("Error adding new product:", err);
        }
    };

    return (
        <div>
            <h1>{data?.id}</h1>
            <h1>{data?.title}</h1>
            <h1>{data?.description}</h1>

            <button onClick={handleAddProduct} disabled={isLoading}>
                Add New Product
            </button>
        </div>
    );
};
export default AddNewProduct;