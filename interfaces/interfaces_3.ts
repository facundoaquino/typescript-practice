;(() => {
	console.log('Interfaces')
	// LAS INTERFACES NO TIENEN SU CONTRAPARTE EN JS
	interface Xmen {
		name: string
		realName: string
		mutantPowe(id: number): string
	}

	// no podemos extender de la interface ... tenemos que implementarla
	class Mutant implements Xmen {
		public name: string
		public realName: string
		mutantPowe(id: number): string {
			return this.name
		}
	}
})()
