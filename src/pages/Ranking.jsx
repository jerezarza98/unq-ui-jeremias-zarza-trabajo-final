import { useEffect, useState } from 'react'

export default function Ranking() {
	const [ranking, setRanking] = useState(() => {
		const rankingFromStorage = window.localStorage.getItem('ranking')

		return rankingFromStorage ? JSON.parse(rankingFromStorage) : []
	})

	console.log(ranking)

	return (
		<div>
			<h1>Ranking</h1>
			{ranking.length === 0 ? (
				<p>Empty</p>
			) : (
				<div>
					{ranking.map(user => (
						<div key={`${user.name}-${user.difficulty}`}>
							<p>{user.name}</p>
							<p>{user.score}</p>
							<p>{user.difficulty}</p>
						</div>
					))}
				</div>
			)}
			<div>
				<button>easy</button>
				<button>normal</button>
				<button>hard</button>
				<button>extreme</button>
			</div>
		</div>
	)
}
