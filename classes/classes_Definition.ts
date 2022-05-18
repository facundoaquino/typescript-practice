;(() => {
	class Avenger {
		private name: string

		private team: string

		realName?: string

		static avgAge: number = 35

		constructor(name: string, team: string, realName?: string) {
			this.name = name
			this.team = team
			this.realName = realName
		}
	}

	const antman: Avenger = new Avenger('AntMan', 'Capital')
	console.log(antman)

	// we can call de statics properties without instance the class

	console.log(Avenger.avgAge)
})()
