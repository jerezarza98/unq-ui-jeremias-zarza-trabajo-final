import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { DifficultyContext } from '../providers/DifficultyProvider'
import { toastError } from '../utils/toastify'
import { getQuestions } from '../services/questions'

export function useQuestions() {
	const { difficulty } = useContext(DifficultyContext)
	const [questions, setQuestions] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		;(async () => {
			try {
				const data = await getQuestions(difficulty)
				setQuestions(data)
			} catch (error) {
				toastError(error)
			} finally {
				setLoading(false)
			}
		})()
	}, [])

	const handleQuestions = () => {
		const [, ...tail] = questions
		setQuestions(tail)
	}

	return [questions, handleQuestions, loading]
}
