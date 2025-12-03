import { useEffect, useState } from 'react'
import { toastError } from '../utils/toastify'
import { getDifficulties } from '../services/difficulties'

export function useDifficulties() {
	const [difficulties, setDifficulties] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		;(async () => {
			try {
				const data = await getDifficulties()
				setDifficulties(data)
			} catch (error) {
				toastError(error)
			} finally {
				setLoading(false)
			}
		})()
	}, [])

	return [difficulties, loading]
}
