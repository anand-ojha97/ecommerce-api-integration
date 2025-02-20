import apiClient from "./apiClient";

const categoriesApi = async () => {
    try {
        const response = await apiClient.get("/products/categories");
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error; // Rethrow error to be handled in the component
    }
};

export default categoriesApi;
