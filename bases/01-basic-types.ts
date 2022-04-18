

console.log('Hola perro!!!');

/*
    ===== Código de TypeScript =====
*/

//typescript infiere el tipo de dato
let nombre: string = 'facundo'

const nombre2 = 'fernandito'


// ERROR in C:\Users\facun\Desktop\programacion\angular\ts-intro\src\index.ts(15,1)
//       TS2322: Type '123' is not assignable to type 'string'.
// nombre = 123
// console.log(nombre)



/* si necesito que tenga una variable los 2 tipos ( aunque no es recomendable) */

let hp: number | string = 99
console.log(hp)
hp='strign'
console.log(hp)

// boolean true o false

let estaVivo: boolean = true