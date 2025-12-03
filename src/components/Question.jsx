import { useState } from 'react'
import { API_URL } from '../config/constans'
import './Question.css'
import axios from 'axios'
import Option from './Option'
import { postAnswer } from '../services/anwers'

export default function Question({
	question,
	handleQuestions,
	handleScore,
	score,
}) {
	const [isAnswered, setIsAnswered] = useState(false)
	const [selectedOption, setSelectedOption] = useState(null)
	const [isCorrect, setIsCorrect] = useState(null)

	const handleOption = async e => {
		if (isAnswered) return
		const optionId = e.target.id
		const data = await postAnswer({ questionId: question.id, option: optionId })

		handleScore(data.answer)

		setIsAnswered(true)
		setSelectedOption(optionId)
		setIsCorrect(data.answer)
	}

	return (
		<div className='question'>
			<div className='question__question-container'>
				<p className='question__question'>{question.question}</p>
			</div>

			<p
				className={`question__score ${score === 0 ? 'question__is-zero' : 'question__is-not-zero'}`}>
				{score}
			</p>

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
				<button
					className='question__nextQuestionBtn'
					onClick={() => handleQuestions()}>
					Next Question
				</button>
			)}
		</div>
	)
}
