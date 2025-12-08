import { useEffect, useState } from 'react'
import { getRanking } from '../logic/storage'
import './Ranking.css'

export default function Ranking() {
	const [difficulty, setDifficulty] = useState('easy')
	const ranking = getRanking()

	const filteredRanking = ranking.filter(user => user.difficulty === difficulty)
	return (
		<div className='ranking'>
			<h1 className='ranking__title'>Ranking</h1>
			<div className='ranking__buttons'>
				<button
					className='ranking__button'
					onClick={() => setDifficulty('easy')}>
					easy
				</button>
				<button
					className='ranking__button'
					onClick={() => setDifficulty('normal')}>
					normal
				</button>
				<button
					className='ranking__button'
					onClick={() => setDifficulty('hard')}>
					hard
				</button>
				<button
					className='ranking__button'
					onClick={() => setDifficulty('extreme')}>
					extreme
				</button>
			</div>
			{filteredRanking.length === 0 ? (
				<div className='ranking__empty-container'>
					<p className='ranking__empty'>Empty</p>
				</div>
			) : (
				<div className='ranking__container'>
					<p className='ranking__difficulty'>{difficulty}</p>
					<div className='ranking__items'>
						{filteredRanking.map((user, index) => (
							<div
								key={`${user.name}-${user.difficulty}`}
								className='ranking__item'>
								<div className='ranking__rank-name'>
									<p className='ranking__rank'>{index + 1}</p>
									<p className='ranking__name'>{user.name}</p>
								</div>

								<p className='ranking__score'>
									{user.score} <span>Score</span>
								</p>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	)
}
