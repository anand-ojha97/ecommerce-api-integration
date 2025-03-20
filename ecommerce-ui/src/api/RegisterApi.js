import apiClient from "./apiClient";

const RegisterApi = async (userData) => {

    try {
        const response = apiClient.post('/users', userData)
        console.log(response);
    } catch (error) {
        console.log('error:',error);
    }
}
export default RegisterApi;