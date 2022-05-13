;(() => {
	type Hero = {
		name: string
		age?: number
		powers: string[]
		getName?: () => string
	}

	// multiple types are allowed
	let customVariable: string | number | Hero = 'Facu'

	customVariable = 10

	console.log(typeof customVariable)
})()
