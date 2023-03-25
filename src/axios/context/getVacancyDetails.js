import axiosInstance from '../axiosInstance'

//get vacancy
export const getVacancyDetails = () => {
	return getVacancyDetailsAsync()
		.then((result) => {
			return result.data
		})
		.catch((error) => {
			// console.log('error 1->', error)
			return error;
		})
}

const getVacancyDetailsAsync = async () => {
	try {
		const response = await axiosInstance.get('/vacancy')
		const body = await response
		return body
	} catch (error) {
		return error
	}
}
