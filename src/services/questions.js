import { API_URL } from '../config/constans'
import axios from 'axios'

const getQuestions = async difficulty => {
	const res = await axios.get(`${API_URL}/questions?difficulty=${difficulty}`)

	return res.data
}

export { getQuestions }
