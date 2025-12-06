import { createContext, useState } from 'react'

export const NameContext = createContext()

export default function NameProvider({ children }) {
	const [name, setName] = useState(() => {
		const nameFromStorage = window.localStorage.getItem('name')

		return nameFromStorage ? JSON.parse(nameFromStorage) : ''
	})
	const [nameError, setNameError] = useState(false)

	return (
		<NameContext.Provider value={{ name, setName, nameError, setNameError }}>
			{children}
		</NameContext.Provider>
	)
}
