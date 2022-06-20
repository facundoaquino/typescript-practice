;(() => {
	abstract class Mutante {
		constructor(public name: string, public realName: string) {}
	}

	class Xmen extends Mutante {
		salvarMundo() {
			console.log('Salvando mundo...')
		}
	}
	class Villian extends Mutante {}

	const wolverine: Mutante = new Xmen('wolverine', 'logan')
})()
