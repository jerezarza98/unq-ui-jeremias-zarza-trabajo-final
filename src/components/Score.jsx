import { useNavigate } from 'react-router-dom'
import './Score.css'

export default function Score({ score, difficulty }) {
	const navigate = useNavigate()

	const handleClick = () => navigate('/')

	return (
		<div className='score'>
			<h1 className='score__title'>
				Your score is {score} on {difficulty} difficulty.
			</h1>
			<button className='score__button' onClick={handleClick}>
				Play again
			</button>
		</div>
	)
}
