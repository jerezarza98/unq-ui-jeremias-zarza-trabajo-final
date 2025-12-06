import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'
import Loading from '../components/Loading'
import { DifficultyContext } from '../providers/DifficultyProvider'
import { useDifficulties } from '../hooks/useDifficulties'
import { NameContext } from '../providers/NameProvider'

export default function Home() {
	const { setDifficulty } = useContext(DifficultyContext)
	const { name, setName, nameError, setNameError } = useContext(NameContext)
	const [difficulties, loading] = useDifficulties()
	const navigate = useNavigate()

	const handleSubmit = e => {
		e.preventDefault()

		if (e.target.name.value.trim() === '') {
			setNameError(true)
			return
		}

		setDifficulty(e.target.difficulties.value)
		setNameError(false)
		window.localStorage.setItem('name', JSON.stringify(name))
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

					<label className='home__label'>
						Enter your name:
						<input
							type='text'
							name='name'
							value={name}
							onChange={e => setName(e.target.value)}
						/>
					</label>
					{nameError && <p>the field "Name" cannot be empty</p>}

					<button className='home__button'>Play</button>
				</form>
			)}
			<button onClick={() => navigate('/ranking')}>Ranking</button>
		</main>
	)
}
