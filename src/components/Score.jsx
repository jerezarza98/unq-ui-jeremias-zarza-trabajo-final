import './Score.css'

export default function Score({ score, difficulty }) {
	return (
		<div className='score'>
			<h1 className='score__title'>
				Your score is {score} on {difficulty} difficulty.
			</h1>
		</div>
	)
}
