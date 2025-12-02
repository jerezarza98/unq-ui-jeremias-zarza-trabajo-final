export default function Option({
	id,
	option,
	handleOption,
	isCorrect,
	selectedOption,
}) {
	return (
		<button
			id={id}
			className={`question__option ${
				selectedOption === id
					? isCorrect
						? 'question__isCorrect'
						: 'question__isIncorrect'
					: ''
			}`}
			onClick={handleOption}>
			{option}
		</button>
	)
}
