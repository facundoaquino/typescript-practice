;(() => {
	let something: any = 123

	// console.log((something as string).charAt(0))

	console.log((<number>something).toFixed(2))
})()
