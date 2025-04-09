import {useUpdateProductMutation} from "../app/services/dummydata.js";
import React from "react";

const UpdateProduct = ({ productId }) => {
    const [updateProduct, { data, isError, isLoading }] =
        useUpdateProductMutation();

    if (isError) {
        return <h1>Error</h1>
    }

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    const handleUpdateProduct = async () => {
        try {
            const updatedProductData = {
                title: "Title updated ",
            };

            await updateProduct({
                id: productId,
                updatedProduct: updatedProductData,
            });
        } catch (err) {
            console.error("Error updating product:", err);
        }
    };

    return (
        <div>
            <h1>{data?.title}</h1>

            <button onClick={handleUpdateProduct} disabled={isLoading}>
                Update Product
            </button>
        </div>
    );
};
export default UpdateProduct;