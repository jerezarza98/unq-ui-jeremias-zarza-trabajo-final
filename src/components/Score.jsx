import { useNavigate } from 'react-router-dom'
import './Score.css'
import { useContext } from 'react'
import { DifficultyContext } from '../providers/DifficultyProvider'

export default function Score({ score }) {
	const navigate = useNavigate()
	const { difficulty } = useContext(DifficultyContext)

	return (
		<div className='score'>
			<h1 className='score__title'>
				Your score is {score} on {difficulty} difficulty.
			</h1>
			<button className='score__button' onClick={() => navigate('/')}>
				Play again
			</button>
		</div>
	)
}
