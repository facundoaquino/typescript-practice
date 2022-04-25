;(() => {
	const addNumber = (a: number, b: number) => a + b

	const greet = (name: string) => `hello ${name}`

	const saveWorld = () => 'The world is ok'

	let myfunction: Function

	let myfunction2: (y: number, g: number) => number

	myfunction2 = addNumber
})()
