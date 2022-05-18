;(() => {
	class Avenger {
		static avgAge: number = 35

		// shorthand to create a class

		constructor(private name: string, private team: string, public realName?: string) {}
	}

	const antman: Avenger = new Avenger('AntMan', 'Capital', 'scoty land')
	console.log(antman)

	// we can call de statics properties without instance the class

	console.log(Avenger.avgAge)
})()
