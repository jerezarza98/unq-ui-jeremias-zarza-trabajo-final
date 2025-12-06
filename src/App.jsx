import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Game from './pages/Game'
import DifficultyProvider from './providers/DifficultyProvider'
import Error404 from './pages/Error404'
import NameProvider from './providers/NameProvider'
import Ranking from './pages/Ranking'

function App() {
	return (
		<DifficultyProvider>
			<NameProvider>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/game' element={<Game />} />

					<Route path='/ranking' element={<Ranking />} />

					<Route path='*' element={<Error404 />} />
				</Routes>
			</NameProvider>
		</DifficultyProvider>
	)
}

export default App
