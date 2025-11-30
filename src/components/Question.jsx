import { useState } from 'react'
import { API_URL } from '../config/constans'
import './Question.css'
import axios from 'axios'

export default function Question({ question, handleQuestions, handleScore }) {
	// console.log(question)
	const [isAnswered, setIsAnswered] = useState(false)
	const [selectedOption, setSelectedOption] = useState(null)
	const [isCorrect, setIsCorrect] = useState(null)

	const handleOption = async e => {
		if (isAnswered) return
		// console.log(e)
		const optionId = e.target.id
		const res = await axios.post(`${API_URL}/answer`, {
			questionId: question.id,
			option: optionId,
		})

		handleScore(res.data.answer)

		setIsAnswered(true)
		setSelectedOption(optionId)
		setIsCorrect(res.data.answer)
	}

	const handleClick = () => {
		handleQuestions()
	}

	return (
		<div>
			<p>{question.question}</p>
			<div>
				<div
					id='option1'
					className={`option ${
						selectedOption === 'option1'
							? isCorrect
								? 'isCorrect'
								: 'isIncorrect'
							: ''
					}`}
					onClick={handleOption}>
					{question.option1}
				</div>
				<div
					id='option2'
					className={`option ${
						selectedOption === 'option2'
							? isCorrect
								? 'isCorrect'
								: 'isIncorrect'
							: ''
					}`}
					onClick={handleOption}>
					{question.option2}
				</div>
				<div
					id='option3'
					className={`option ${
						selectedOption === 'option3'
							? isCorrect
								? 'isCorrect'
								: 'isIncorrect'
							: ''
					}`}
					onClick={handleOption}>
					{question.option3}
				</div>
				<div
					id='option4'
					className={`option ${
						selectedOption === 'option4'
							? isCorrect
								? 'isCorrect'
								: 'isIncorrect'
							: ''
					}`}
					onClick={handleOption}>
					{question.option4}
				</div>
			</div>
			{isAnswered && <button onClick={handleClick}>Next Question</button>}
		</div>
	)
}
