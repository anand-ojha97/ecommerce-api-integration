import apiClient from "./apiClient";

const productsApi = async (number = 4) => {
    try {
        const response = await apiClient.get(`/products/?limit=${number}`);
        console.log(response.data);
        return response.data;

    } catch (error) {
        console.error('Error fetching products:', error);
        throw error; // Rethrow error to be handled in the component
    }
};

export default productsApi