;(() => {
	let flash: { name: string; age?: number; powers: string[]; getName?: () => string } = {
		name: 'Barry',
		age: 58,
		powers: ['time traveller'],
	}

	flash = {
		name: 'Clark',
		// age: 60,
		powers: ['very strong'],
		getName() {
			return this.name
		},
	}

	console.log(flash)
})()
