/******************  CLASES  *********************/

class PersonaNormal {
	 
	constructor(public nombre:string , public direccio :string){}
}







//una ventajas de las clases en ts es que podemos definir las propiedades privadas , publicas y estaticas
//por defecto son publicas
class Heroe extends PersonaNormal {
	// private alterEgo: string
	// public edad: number
	// static nombreReal: number
	// alterEgo: string
	// edad: number
	// nombreReal: number


	// es comun ver definido el tipo de acceso directamente en el constructor
	//puedo mandarlos opcionales tambien con ?
	constructor(public alterEgo:string , public edad ? : number , public nombreReal? : string){
		super(nombreReal,'newyork')
	}
}

const iroman = new Heroe('iroman', 45, 'toni')
console.log(iroman)
