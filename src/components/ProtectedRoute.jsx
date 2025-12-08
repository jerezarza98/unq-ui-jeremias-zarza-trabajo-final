import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { NameContext } from '../providers/NameProvider'

export default function ProtectedRoute({ children }) {
	const { name } = useContext(NameContext)

	if (name === '') {
		return <Navigate to='/' replace />
	}

	return children
}
