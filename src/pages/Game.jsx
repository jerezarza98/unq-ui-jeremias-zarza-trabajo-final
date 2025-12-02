import axios from 'axios'
import { useEffect, useState } from 'react'
import { API_URL } from '../config/constans'
import { toastError } from '../utils/toastify'
import Question from '../components/Question'
import './Game.css'
import Loading from '../components/Loading'
import Score from '../components/Score'

export default function Game({ difficulty }) {
	const [questions, setQuestions] = useState([])
	const [score, setScore] = useState(0)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		;(async () => {
			try {
				const res = await axios.get(
					`${API_URL}/questions?difficulty=${difficulty}`,
				)
				setQuestions(res.data)
			} catch (error) {
				toastError(error)
			} finally {
				setLoading(false)
			}
		})()
	}, [])

	const handleQuestions = () => {
		const [, ...tail] = questions
		setQuestions(tail)
	}

	const handleScore = isCorrect => {
		if (isCorrect) setScore(score + 1)
	}

	return (
		<>
			{loading && <Loading />}
			<div className='game'>
				{!loading && questions.length > 0 && (
					<>
						<h1 className='game__title'>Question</h1>
						<Question
							key={questions[0].id}
							question={questions[0]}
							handleQuestions={handleQuestions}
							handleScore={handleScore}
						/>
					</>
				)}
			</div>
			{!loading && questions.length === 0 && (
				<Score score={score} difficulty={difficulty} />
			)}
		</>
	)
}
