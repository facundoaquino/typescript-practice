import { calculaIsv, Producto } from './06-destructuring-function';

/****************** importacion / Exportaciones  *********************/

//ver importacion de archivo 6 , sin importar funciona aca pero no en angular porque typescript compila despues todo en un archivo por eso funciona aca

const carritoCompras: Producto[] = [
	{
		desc: 'phone 1',
		precio: 200,
	},
	{
		desc: 'phone 2',
		precio: 900,
	},
]


const [total , isvv] = calculaIsv( carritoCompras)
console.log(total , isvv)