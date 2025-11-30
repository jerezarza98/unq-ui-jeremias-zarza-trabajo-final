import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { useState } from 'react'
import Game from './pages/Game'

function App() {
	const [difficulty, setDifficulty] = useState('easy')
	return (
		<>
			<Routes>
				<Route path='/' element={<Home setDifficulty={setDifficulty} />} />
				<Route path='/game' element={<Game difficulty={difficulty} />} />
			</Routes>
		</>
	)
}

export default App
