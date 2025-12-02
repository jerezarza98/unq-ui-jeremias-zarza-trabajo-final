import { useEffect, useState } from 'react'
import { API_URL } from '../config/constans'
import { toastError } from '../utils/toastify'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './Home.css'
import Loading from '../components/Loading'

export default function Home({ setDifficulty }) {
	const [difficulties, setDifficulties] = useState([])
	const navigate = useNavigate()
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		;(async () => {
			try {
				const res = await axios.get(`${API_URL}/difficulty`)
				setDifficulties(res.data)
			} catch (error) {
				toastError(error)
			} finally {
				setLoading(false)
			}
		})()
	}, [])

	const handleSubmit = e => {
		e.preventDefault()

		setDifficulty(e.target.difficulties.value)
		navigate('/game')
	}

	if (loading) return <Loading />

	return (
		<main className='home'>
			<h1 className='home__title'>Trivia Crack</h1>
			{difficulties.length > 0 && (
				<form onSubmit={handleSubmit} className='home__form'>
					<label htmlFor='difficulties' className='home__label'>
						Select a difficulty:
						<select name='difficulties' className='home__select'>
							{difficulties.map(difficulty => (
								<option
									key={difficulty}
									value={difficulty}
									className='home__option'>
									{difficulty}
								</option>
							))}
						</select>
					</label>

					<button className='home__button'>Play</button>
				</form>
			)}
		</main>
	)
}
