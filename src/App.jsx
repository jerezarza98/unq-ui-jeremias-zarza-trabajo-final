import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { useState } from 'react'
import Game from './pages/Game'
import DifficultyProvider from './providers/DifficultyProvider'
import Error404 from './pages/Error404'

function App() {
	return (
		<DifficultyProvider>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/game' element={<Game />} />
				<Route path='*' element={<Error404 />} />
			</Routes>
		</DifficultyProvider>
	)
}

export default App
