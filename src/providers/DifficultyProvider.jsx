import { createContext, useState } from 'react'

export const DifficultyContext = createContext()

export default function DifficultyProvider({ children }) {
	const [difficulty, setDifficulty] = useState('easy')

	return (
		<DifficultyContext.Provider value={{ difficulty, setDifficulty }}>
			{children}
		</DifficultyContext.Provider>
	)
}
