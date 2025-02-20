import apiClient from "./apiClient";

const productApi = async (category ='jewelery', number = 4) => {
    try {
        const response = await apiClient.get(`/products/category/${category}?limit=${number}`);
        console.log(response.data);
        return response.data;

    } catch (error) {
        console.error('Error fetching products:', error);
        throw error; // Rethrow error to be handled in the component
    }
};

export default productApi