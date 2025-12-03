import axios from 'axios'
import { API_URL } from '../config/constans'

const postAnswer = async answer => {
	const res = await axios.post(`${API_URL}/answer`, answer)

	return res.data
}

export { postAnswer }
