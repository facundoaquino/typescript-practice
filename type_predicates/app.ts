// type predicates


type Species = "cat" | "dog"

interface Pet {
  species: Species
}

class Cat implements Pet {
  public species: Species = 'cat'
  public meow() : void {
    console.log('meooou')    
  }
}


function petIsCat ( pet: Pet): pet is Cat {
  return pet.species === 'cat'
}

function petIsCatBoolean(pet: Pet): boolean {
  return pet.species === 'cat'
}

const newCat: Pet = new Cat()

//YA RECONOCE QUE ES CAT DENTRO DEL IF SINO HABRIA QUE CASTEARLO
if(petIsCat(newCat)){
  newCat.meow()
}

// aca no lo conoce
if(petIsCatBoolean(newCat)){
  (newCat as Cat).meow()
}

