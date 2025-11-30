import { useState } from 'react'
import { API_URL } from '../config/constans'
import './Question.css'
import axios from 'axios'

export default function Question({ question }) {
	console.log(question)
	const [isAnswered, setIsAnswered] = useState(false)

	const handleOption = async e => {
		if (isAnswered) return
		console.log(e)
		const optionId = e.target.id
		const res = await axios.post(`${API_URL}/answer`, {
			questionId: question.id,
			option: optionId,
		})
		console.log(res)
		if (res.data.answer) {
			e.target.classList.add('isCorrect')
		} else {
			e.target.classList.add('isIncorrect')
		}

		setIsAnswered(true)
	}
	return (
		<div>
			<p>{question.question}</p>
			<div>
				<div id='option1' className='option' onClick={handleOption}>
					{question.option1}
				</div>
				<div id='option2' className='option' onClick={handleOption}>
					{question.option2}
				</div>
				<div id='option3' className='option' onClick={handleOption}>
					{question.option3}
				</div>
				<div id='option4' className='option' onClick={handleOption}>
					{question.option4}
				</div>
			</div>
			{isAnswered && <button>Next Question</button>}
		</div>
	)
}
