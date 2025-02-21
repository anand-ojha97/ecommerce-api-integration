import apiClient from "./apiClient";
import { useParams } from "react-router-dom";

const singleProductApi = async (id) => {

    try {
        const singleProduct = await apiClient.get(`/products/${id}`);
        return singleProduct.data;
       
    } catch (error) {
        console.log(error ,'not found');
    }
}

export default singleProductApi