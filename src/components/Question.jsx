import { useState } from 'react'
import { API_URL } from '../config/constans'
import './Question.css'
import axios from 'axios'
import Option from './Option'

export default function Question({ question, handleQuestions, handleScore }) {
	const [isAnswered, setIsAnswered] = useState(false)
	const [selectedOption, setSelectedOption] = useState(null)
	const [isCorrect, setIsCorrect] = useState(null)

	const handleOption = async e => {
		if (isAnswered) return
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
		<div className='question'>
			<div className='question__question-container'>
				<p className='question__question'>{question.question}</p>
			</div>

			<div className='question__options'>
				<Option
					id={'option1'}
					option={question.option1}
					handleOption={handleOption}
					isCorrect={isCorrect}
					selectedOption={selectedOption}
				/>
				<Option
					id={'option2'}
					option={question.option2}
					handleOption={handleOption}
					isCorrect={isCorrect}
					selectedOption={selectedOption}
				/>
				<Option
					id={'option3'}
					option={question.option3}
					handleOption={handleOption}
					isCorrect={isCorrect}
					selectedOption={selectedOption}
				/>
				<Option
					id={'option4'}
					option={question.option4}
					handleOption={handleOption}
					isCorrect={isCorrect}
					selectedOption={selectedOption}
				/>
			</div>
			{isAnswered && (
				<button className='question__nextQuestionBtn' onClick={handleClick}>
					Next Question
				</button>
			)}
		</div>
	)
}
