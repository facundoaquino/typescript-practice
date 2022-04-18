// let habilidades:(boolean | string | number)[] = ['fly','punch',2];
// habilidades.push(true)

//ya marca error en tiempo de escritura
// let habilidades: string[] = ['fly', 'punch', 2]

// no se recomienda poner any , en ninguna variable u objeto
const personaje: any = {
	name: 'superBash',
	hp: 199,
	habilidades: ['boo', 'figther'],
}
personaje.city = 'buenos aires'

// se puede definir las interfaces , propias de typescript

interface Personaje2 {
	name: string;
	hp: number;
	habilidades: string[];
    //para hacer una propiedad opcionalponemos el ?
    city?:string;
}

const personaje2: Personaje2 = {
	name: 'superBash',
	hp: 199,
	habilidades: ['boo', 'figther'],
}
personaje2.city = 'buenos aires'


console.table(personaje2)