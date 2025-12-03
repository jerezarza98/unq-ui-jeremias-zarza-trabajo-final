import axios from 'axios'
import { API_URL } from '../config/constans'

const getDifficulties = async () => {
	const res = await axios.get(`${API_URL}/difficulty`)

	return res.data
}

export { getDifficulties }
