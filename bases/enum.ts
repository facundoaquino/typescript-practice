;(() => {
	enum AudioLevel {
		min,
		medium,
		max = 100,
	}

	let currentAudio = AudioLevel.medium
	console.log(currentAudio)
})()
