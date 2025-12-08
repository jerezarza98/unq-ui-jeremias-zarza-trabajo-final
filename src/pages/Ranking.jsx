import { useEffect, useState } from 'react'
import { getRanking } from '../logic/storage'

export default function Ranking() {
	const [difficulty, setDifficulty] = useState('easy')
	const ranking = getRanking()

	const filteredRanking = ranking.filter(user => user.difficulty === difficulty)
	return (
		<div>
			<h1>Ranking</h1>
			<div>
				<button onClick={() => setDifficulty('easy')}>easy</button>
				<button onClick={() => setDifficulty('normal')}>normal</button>
				<button onClick={() => setDifficulty('hard')}>hard</button>
				<button onClick={() => setDifficulty('extreme')}>extreme</button>
			</div>
			{filteredRanking.length === 0 ? (
				<p>Empty</p>
			) : (
				<div>
					<p>{difficulty}</p>
					{filteredRanking.map(user => (
						<div key={`${user.name}-${user.difficulty}`}>
							<p>{user.name}</p>
							<p>{user.score}</p>
							<p>{user.difficulty}</p>
						</div>
					))}
				</div>
			)}
		</div>
	)
}
