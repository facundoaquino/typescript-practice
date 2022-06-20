;(() => {
	class Avenger {
		static avgAge: number = 35
		static getAvgAge() {
			return this.name
		}

		constructor(private name: string, private team: string, public realName?: string) {}

		// BY DEFECT METHODS ARE PUBLIC
		private bio() {
			return `${this.name}  (${this.team})`
		}
	}

	const antman: Avenger = new Avenger('AntMan', 'Capital', 'scoty land')
	console.log(antman.bio())
	console.log(Avenger.getAvgAge())
})()
