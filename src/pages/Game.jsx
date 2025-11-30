import axios from 'axios'
import { useEffect, useState } from 'react'
import { API_URL } from '../config/constans'
import { toastError } from '../utils/toastify'
import Question from '../components/Question'

export default function Game({ difficulty }) {
	const [questions, setQuestions] = useState([])
	const [isNextQuestion, setIsNextQuestion] = useState(false)
	useEffect(() => {
		;(async () => {
			try {
				const res = await axios.get(
					`${API_URL}/questions?difficulty=${difficulty}`,
				)
				setQuestions(res.data)
				// console.log(res.data)
			} catch (error) {
				toastError(error)
			}
		})()
	}, [])

	return (
		<div>
			<h1>Question</h1>
			{questions.length > 0 && <Question question={questions[0]} />}
		</div>
	)
}
