import { useState } from 'react'
import Question from '../components/Question'
import './Game.css'
import Loading from '../components/Loading'
import Score from '../components/Score'
import { useQuestions } from '../hooks/useQuestions'

export default function Game() {
	const [questions, handleQuestions, loading] = useQuestions()
	const [score, setScore] = useState(0)

	const handleScore = isCorrect => {
		if (isCorrect) setScore(score + 1)
	}

	return (
		<>
			{loading && <Loading />}

			{!loading && questions.length > 0 && (
				<div className='game'>
					<h1 className='game__title'>Question</h1>
					<Question
						key={questions[0].id}
						question={questions[0]}
						handleQuestions={handleQuestions}
						handleScore={handleScore}
						score={score}
					/>
				</div>
			)}

			{!loading && questions.length === 0 && <Score score={score} />}
		</>
	)
}
