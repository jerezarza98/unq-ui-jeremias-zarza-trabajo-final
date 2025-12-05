import { useNavigate } from 'react-router-dom'
import './Error404.css'

export default function Error404() {
	const navigate = useNavigate()
	return (
		<div className='error404'>
			<h1 className='error404__title'>Error 404 - Page Not Found</h1>
			<button className='error404__button' onClick={() => navigate('/')}>
				Menu
			</button>
		</div>
	)
}
