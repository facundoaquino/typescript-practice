/*
    ===== Código de TypeScript =====
*/


//las llaves indica que es generico pero la t es un standar podria ser cualquiera
function queTipoSoy<T>(argumento: T) {
    return argumento;
}


let soyString  = queTipoSoy('Hola Mundo');
let soyNumbero = queTipoSoy( 100 );
let soyArreglo = queTipoSoy( [1,2,3,4,5,6,7,8,9,10] );

let soyExplicito = queTipoSoy<number>( 100 );





