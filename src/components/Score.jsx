import { useNavigate } from 'react-router-dom'
import './Score.css'
import { useContext, useEffect, useRef, useState } from 'react'
import { DifficultyContext } from '../providers/DifficultyProvider'
import { NameContext } from '../providers/NameProvider'

export default function Score({ score }) {
	const navigate = useNavigate()
	const { name, setName } = useContext(NameContext)
	const { difficulty } = useContext(DifficultyContext)
	const [message, setMessage] = useState('')
	const hasRun = useRef(false)

	useEffect(() => {
		if (hasRun.current) return
		hasRun.current = true

		const rankingFromStorage = window.localStorage.getItem('ranking')
		let ranking = rankingFromStorage ? JSON.parse(rankingFromStorage) : []

		const rankingDifficulty = ranking.filter(
			user => user.difficulty === difficulty,
		)

		if (
			score === 0 ||
			(rankingDifficulty.length === 10 &&
				rankingDifficulty.every(user => user.score >= score))
		) {
			console.log('entró aca')
			setMessage(
				`You didn't make it into the ranking on ${difficulty} difficulty.`,
			)
			return
		}

		const index = ranking.findIndex(
			user => user.name === name && user.difficulty === difficulty,
		)

		if (rankingDifficulty.length < 10 && index === -1) {
			console.log('Jugador Nuevo')

			ranking = [
				...ranking,
				{ name: name, score: score, difficulty: difficulty },
			]

			setMessage(`You made it into the ranking on ${difficulty} difficulty.`)

			window.localStorage.setItem(
				'ranking',
				JSON.stringify(ranking.sort((a, b) => b.score - a.score)),
			)
			return
		}

		if (index !== -1) {
			const user = ranking[index]

			console.log('Mismo jugador con puntaje mejor')
			ranking[index] = {
				name: name,
				score: score,
				difficulty: difficulty,
			}
		} else {
			console.log('Jugador nuevo con mejor puntaje')
			const user = rankingDifficulty[rankingDifficulty.length - 1]
			const indexUser = ranking.indexOf(user)
			ranking[indexUser] = {
				name: name,
				score: score,
				difficulty: difficulty,
			}
		}
		setMessage(`You made it into the ranking on ${difficulty} difficulty.`)
		window.localStorage.setItem(
			'ranking',
			JSON.stringify(ranking.sort((a, b) => b.score - a.score)),
		)
	}, [])

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
