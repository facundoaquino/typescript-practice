;(() => {
	// the function dosn´t return any value
	function callName(): void {
		console.log('calling...')
	}

	const call = callName()
	console.log(call)
})()
