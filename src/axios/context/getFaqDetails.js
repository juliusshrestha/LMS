import axiosInstance from '../axiosInstance'

export const getFaqDetails = () => {
    return getFaqDetailsAsync()
        .then((result) => {
            return result.data;
        })
        .catch((error) => {
            return error;
        })
}
const getFaqDetailsAsync = async () => {
    try {
        const response = await axiosInstance.get('/faqlist');
        const body = await response;
        return body;
    } catch (error) {
        return error;
    }
}