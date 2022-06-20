;(() => {
	class Avenger {
		constructor(public name: string, public realName: string) {
			console.log('llamando constructor avenger')
		}

		protected getFullName() {
			return `${this.name} ${this.realName}`
		}
	}

	class Xmen extends Avenger {
		constructor(name: string, realName: string, public isMutant: boolean) {
			super(name, realName)
			console.log('llamando constructor Xmen')
		}

		get fullName() {
			return `Getter => ${this.name}`
		}

		set fullName(name: string) {
			this.name = name
		}

		getFullNameXmen() {
			console.log(super.getFullName())
		}
	}

	const wolverine = new Xmen('wolverinee', 'logan', true)

	console.log(wolverine)

	wolverine.getFullNameXmen()

	console.log(wolverine.fullName)
})()