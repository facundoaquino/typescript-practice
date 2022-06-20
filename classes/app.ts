;(() => {
	class Avenger {
		constructor(public name: string, public realName: string) {
			console.log('llamando constructor avenger')
		}

		// private getFullName() {
		// 	return `${this.name} ${this.realName}`
		// }

		//PRIVATE VS PROTECTED
		//  podemos acceder a propiedades en clases que extiendan/herenden de esta usando protected , con private no.
		protected getFullName() {
			return `${this.name} ${this.realName}`
		}
	}

	class Xmen extends Avenger {
		constructor(name: string, realName: string, public isMutant: boolean) {
			super(name, realName)
			console.log('llamando constructor Xmen')
		}

		getFullNameXmen() {
			console.log(super.getFullName())
		}
	}

	const wolverine = new Xmen('wolverinee', 'logan', true)

	console.log(wolverine)

	wolverine.getFullNameXmen()
})()
