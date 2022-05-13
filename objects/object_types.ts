;(() => {
	type Hero = {
		name: string
		age?: number
		powers: string[]
		getName?: () => string
	}

	let flash: Hero = {
		name: 'Barry',
		age: 58,
		powers: ['time travellers'],
	}

	let superman: Hero = {
		name: 'clark',
		age: 68,
		powers: ['fly'],
	}
})()
