

/****************** DESESTRUCTURACION DE OBJETOS  *********************/


interface Reproductor {
	volumen : number
	segundo: number
	cancion: string
	detalles: Detalles
}

interface Detalles {
	author:string
	anio:number
}


const reproductor : Reproductor ={
	volumen:12,
	segundo:43,
	cancion:'quilimi',
	detalles:{
		author:'murcia galaxia',
		anio:2019,
	}
}
const { volumen ,segundo , cancion , detalles:{author} } = reproductor

console.log('el volumen es : ' + volumen)
console.log('el segundo es : ' + segundo)
console.log('el cancion es : ' + cancion)
console.log('el author es : ' +  author)



/****************** DESESTRUCTURACION DE ARREGLOS  *********************/

 const chavo:string[]=['chavito','quiki','don ramon']

const [prinipal , nene , viejo] = chavo

console.log(prinipal)
console.log(nene)
console.log(viejo)



