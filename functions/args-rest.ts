;(() => {
	const fullName = (firstName: string, ...restArgs: string[]): string => {
		return `${firstName}  ${restArgs.join(' ')}`
	}

	const fully = fullName('fede', 'berton')

	console.log(fully)
})()
