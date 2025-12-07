export const getRanking = () => {
	const rankingFromStorage = window.localStorage.getItem('ranking')
	return rankingFromStorage ? JSON.parse(rankingFromStorage) : []
}

export const updateRanking = ranking =>
	window.localStorage.setItem(
		'ranking',
		JSON.stringify(ranking.sort((a, b) => b.score - a.score)),
	)
