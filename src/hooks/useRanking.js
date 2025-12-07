import { useEffect, useRef, useState } from 'react'
import { getRanking, updateRanking } from '../logic/storage'

export function useRanking({ name, difficulty, score }) {
	const hasRun = useRef(false)
	const [message, setMessage] = useState('')
	useEffect(() => {
		if (hasRun.current) return
		hasRun.current = true //esto dejo por el StrictMode

		let ranking = getRanking()

		const rankingDifficulty = ranking.filter(
			user => user.difficulty === difficulty,
		)

		if (
			score === 0 ||
			(rankingDifficulty.length === 10 &&
				rankingDifficulty.every(user => user.score >= score))
		) {
			setMessage(
				`You didn't make it into the ranking on ${difficulty} difficulty.`,
			)
			return
		}

		const index = ranking.findIndex(
			user => user.name === name && user.difficulty === difficulty,
		)

		if (rankingDifficulty.length < 10 && index === -1) {
			ranking = [
				...ranking,
				{ name: name, score: score, difficulty: difficulty },
			]

			setMessage(`You made it into the ranking on ${difficulty} difficulty.`)

			updateRanking(ranking)
			return
		}

		const newUser = {
			name: name,
			score: score,
			difficulty: difficulty,
		}

		if (index !== -1) {
			const user = ranking[index]

			if (score < user.score) {
				setMessage(
					`You didn't make it into the ranking on ${difficulty} difficulty.`,
				)
				return
			}

			ranking[index] = newUser
		} else {
			const user = rankingDifficulty[rankingDifficulty.length - 1]
			const indexUser = ranking.indexOf(user)
			ranking[indexUser] = newUser
		}

		setMessage(`You made it into the ranking on ${difficulty} difficulty.`)
		updateRanking(ranking)
	}, [])
	return [message]
}
