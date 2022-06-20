;(() => {
	//  Constructor privado: no se usa mucho , es para controlar como son ejecutadas nuestras instancias , puede usarse para manejar singletons

	// SINGLETON!!
	class Apocalipsis {
		static intance: Apocalipsis

		private constructor(public name: string) {}

		static callApocalipsis(): Apocalipsis {
			if (!Apocalipsis.intance) {
				Apocalipsis.intance = new Apocalipsis('Soy Apocalipsis unicooo')
			}

			return Apocalipsis.intance
		}
	}

	// const apocalipsis1 = new Apocalipsis('Soy apoca the one')
	// const apocalipsis2 = new Apocalipsis('Soy apoca the one')
	// const apocalipsis3 = new Apocalipsis('Soy apoca the one')

	// console.log(apocalipsis1)
	// console.log(apocalipsis2)
	// console.log(apocalipsis3)

	const apocalipsis1 = Apocalipsis.callApocalipsis()

	console.log(apocalipsis1)
})()
