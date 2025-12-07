import { useNavigate } from 'react-router-dom'
import './Score.css'
import { useContext } from 'react'
import { DifficultyContext } from '../providers/DifficultyProvider'
import { NameContext } from '../providers/NameProvider'
import { useRanking } from '../hooks/useRanking'

export default function Score({ score }) {
	const navigate = useNavigate()
	const { name, setName } = useContext(NameContext)
	const { difficulty } = useContext(DifficultyContext)

	const [message] = useRanking({ name, difficulty, score })

	const handleOnClick = () => {
		window.localStorage.removeItem('name')
		setName('')
		navigate('/')
	}

	return (
		<div className='score'>
			<h1>Well done, {name}!!!</h1>
			<p className='score__title'>
				Your score is {score} on {difficulty} difficulty.
			</p>
			<p>{message}</p>
			<button className='score__button' onClick={handleOnClick}>
				Play again
			</button>
		</div>
	)
}
