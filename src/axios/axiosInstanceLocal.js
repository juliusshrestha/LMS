import axios from 'axios'


const axiosInstanceLocal = axios.create({
	baseURL: 'http://localhost:8000/api/',
})
export default axiosInstanceLocal