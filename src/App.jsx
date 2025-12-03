import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { useState } from 'react'
import Game from './pages/Game'
import DifficultyProvider from './providers/DifficultyProvider'

function App() {
	return (
		<DifficultyProvider>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/game' element={<Game />} />
			</Routes>
		</DifficultyProvider>
	)
}

export default App
