//FUNCIONES

function sumar(a: number, b: number): number {
	//  return (a+b).toString()
	return a + b
}

//  const resultado = sumar('facundo','emmanuel')
const resultado = sumar(55, 22)
console.log(resultado)

//tambien es valido especificar el tipado en arrows function
const sumarArrow = (a: number, b: number): number => {
	return a + b
}

//parametros opcionales , el orden es , parametros obligatorios  , parametros opcionales y parametros que se inicializan por defecto
function multiplicar(numero: number, otroNumero?: number, base: number = 2) {
	return numero * base
}

const resultado2 = multiplicar(10, 20)
console.log({ resultado2 })

/**********  funciones con objetoss************ */

interface PersonajeLor {
	nombre: string
	pv: number
	mostrarHp:()=>void
}

//cuando no regresa nada se puede especificar un return de void

function curar(personaje: PersonajeLor, curarX: number): void {
	personaje.pv += curarX
	// console.log(personaje)
}

const nuevoPersonaje: PersonajeLor = {
	nombre: 'superpunch',
	pv: 50,
	mostrarHp(){
		console.log('puntos de vida ', this.pv)
	}
}

curar(nuevoPersonaje, 19)
