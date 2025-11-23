import { useEffect, useState } from 'react'
import { API_URL } from './config/constans'
import { toastError } from './utils/toastify'
import axios from 'axios'

export default function Home({ setDifficulty }) {
	const [difficulties, setDifficulties] = useState([])

	useEffect(() => {
		;(async () => {
			try {
				const res = await axios.get(`${API_URL}/difficulty`)
				setDifficulties(res.data)
			} catch (error) {
				toastError(error)
			}
		})()
	}, [])

	const handleSubmit = e => {
		e.preventDefault()

		setDifficulty(e.target.difficulties.value)
	}

	return (
		<main className='container'>
			<h1>Trivia Crack</h1>
			{difficulties.length > 0 && (
				<form onSubmit={handleSubmit}>
					<label htmlFor='difficulties'>Select a difficulty: </label>
					<select name='difficulties'>
						{difficulties.map(difficulty => (
							<option key={difficulty} value={difficulty}>
								{difficulty}
							</option>
						))}
					</select>

					<button>Play</button>
				</form>
			)}
		</main>
	)
}
