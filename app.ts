
function printToConsole( constructor: Function ){
  console.log(constructor)
}


const printToConsoleConditional = (print: boolean):Function =>{
  return ()=> {
    if(print){
      return printToConsole
    }else {
      return ()=>{}
    }
  }
}

const blockPrototype = function( constructor: Function ){
  Object.seal(constructor)
  Object.seal(constructor.prototype)
}

@blockPrototype
@printToConsoleConditional(true) 
class Pokemon {

  public publiApi: string = 'https://pokeapi.co';

  constructor(
    public name: string
  ){}

}

const poke1 = new Pokemon('charmander');
(Pokemon.prototype as any).customName= 'Pica'
/* console.log(poke1); 
 */
