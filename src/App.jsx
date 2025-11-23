import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import { useState } from 'react'

function App() {
	const [difficulty, setDifficulty] = useState('')
	return (
		<>
			<Routes>
				<Route path='/' element={<Home setDifficulty={setDifficulty} />} />
			</Routes>
		</>
	)
}

export default App
