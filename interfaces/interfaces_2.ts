;(() => {
	console.log('Interfaces')
	// LAS INTERFACES NO TIENEN SU CONTRAPARTE EN JS

	interface Client {
		name: string
		age?: number
		address: Address
		getFullAddress(): string
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
		getFullAddress() {
			return this.address.zip
		},
	}
})()
