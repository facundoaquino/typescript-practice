;(() => {
	console.log('Interfaces')
	// LAS INTERFACES NO TIENEN SU CONTRAPARTE EN JS

	interface Hero {
		name: string
		age?: number
		powers: string[]
		getName?: () => string
	}

	interface Client {
		name: string
		age?: number
		address: Address
	}
	interface Address {
		id: number
		zip: string
	}

	const client: Client = {
		name: 'Facundo',
		age: 22,
		address: {
			id: 111,
			zip: 'JUP 123',
		},
	}
})()
