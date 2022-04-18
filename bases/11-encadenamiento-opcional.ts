/****************** ENCADENAMIENTO OPCIONAL  *********************/


interface Pasajero {
	nombre:string
	hijos?:string[]
}


const pasajero1: Pasajero ={
	nombre : 'facundo '
}

const pasajero2: Pasajero = {
	nombre:'sofia',
	hijos:['pepe','marisa']
}


function imprimeHijos ( pasajero:Pasajero):void{
	const cantidadHijos = pasajero.hijos?.length || 0

	console.log(cantidadHijos );
	

}

imprimeHijos(pasajero1)

 