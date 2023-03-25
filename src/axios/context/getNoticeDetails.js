import axiosInstance from '../axiosInstance'

export const getNoticeDetails = () => {
    return getNoticeDetailsAsync()
        .then((result) => {
            return result.data;
        })
        .catch((error) => {
            return error;
        })
}
const getNoticeDetailsAsync = async () => {
    try {
        const response = await axiosInstance.get('/notice');
        const body = await response;
        return body;
    } catch (error) {
        return error;
    }
}