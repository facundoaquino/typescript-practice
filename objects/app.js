;(function () {
	var flash = {
		name: 'Barry',
		age: 58,
		powers: ['time traveller'],
	}
	flash = {
		name: 'Clark',
		// age: 60,
		powers: ['very strong'],
		getName: function () {
			return this.name
		},
	}
	console.log(flash)
})()
