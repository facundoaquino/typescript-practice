/****************** DESESTRUCTURACION DE ARGUMETOS  *********************/

export interface Producto {
	desc: string
	precio: number
}

const telefono: Producto = {
	desc: 'samsung 10',
	precio: 350,
}
const tablet: Producto = {
	desc: 'samsung 100',
	precio: 300,
}

export function calculaIsv(productos: Producto[]):[number,number] {
	let total = 0

	productos.forEach(({ precio }) => {
		total += precio
	})

	return [total , total * 0.15]
}

const articulos = [telefono, tablet]
const isv = calculaIsv(articulos)
console.log({ isv })
