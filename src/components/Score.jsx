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
		if (score === 0) {
			setMessage(
				`You didn't make it into the ranking on ${difficulty} difficulty.`,
			)
			return
		}
		const rankingFromStorage = window.localStorage.getItem('ranking')
		let ranking = rankingFromStorage ? JSON.parse(rankingFromStorage) : []
		const index = ranking.findIndex(
			user => user.name === name && user.difficulty === difficulty,
		)

		// console.log(index)

		if (index === -1) {
			console.log('Jugador Nuevo')

			ranking = [
				...ranking,
				{ name: name, score: score, difficulty: difficulty },
			]

			setMessage(`You made it into the ranking on ${difficulty} difficulty.`)
		} else {
			const user = ranking[index]

			if (score > user.score) {
				console.log('Jugador con puntaje mejor')
				ranking[index] = {
					name: name,
					score: score,
					difficulty: difficulty,
				}
				setMessage(`You made it into the ranking on ${difficulty} difficulty.`)
			} else {
				console.log('Jugador con puntaje menor')
				setMessage(
					`You didn't make it into the ranking on ${difficulty} difficulty.`,
				)
			}
		}
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
