/***************************************/

//usualmente no es comun ver los objetos anidados dentro de las interfaces de typescript
// interface SuperHeroe{
// 	nombre:string
// 	edad:33
// 	direccion:{
// 		calle:string
// 		pais: string
// 		ciudad:string
// 	}
// 	mostrarDireccion:()=> string
// }

/********************se hace asi separando la interfaz de direccion*******************/

interface SuperHeroe {
	nombre: string
	edad: 33
	direccion: Direccion
	mostrarDireccion: () => string
}

interface Direccion {
	calle: string
	pais: string
	ciudad: string
}

const superHeroe = {
	nombre: 'batmun',
	edad: 33,
	direccion: {
		calle: 'santa miu',
		pais: 'usa',
		ciudad: 'ny',
	},
	mostrarDireccion() {
		return this.nombre + ' ' + this.direccion.ciudad
	},
}

const direccion = superHeroe.mostrarDireccion()
console.log(direccion)
