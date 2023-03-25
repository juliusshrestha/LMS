import axiosInstance from '../axiosInstance'

export const getServiceIconDetails = () => {
	return getServiceIconDetailsAsync()
		.then((result) => {
			return result.data.results
		})
		.catch((error) => {
			// console.log('error 1->', error)
			return error;
		})
}

const getServiceIconDetailsAsync = async () => {
	try {
		const response = await axiosInstance.get('/iconbox')
		const body = await response
		return body
	} catch (error) {
		return error
	}
}
