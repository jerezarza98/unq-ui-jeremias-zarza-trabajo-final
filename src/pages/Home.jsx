import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'
import Loading from '../components/Loading'
import { DifficultyContext } from '../providers/DifficultyProvider'
import { useDifficulties } from '../hooks/useDifficulties'

export default function Home() {
	const { setDifficulty } = useContext(DifficultyContext)
	const [difficulties, loading] = useDifficulties()
	const navigate = useNavigate()

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
