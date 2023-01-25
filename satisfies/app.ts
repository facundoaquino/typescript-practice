interface IUser {
  id: number;
  firstName: string;
  image: UserImage;
}

type UserImage = string | ICustomImage

interface ICustomImage {
  data: string; 
  width: number;
  height: number;
}

const myCustomImage: ICustomImage = {
  data: "base64",
  width: 30,
  height: 30,
}

// con satifies ya sabemos que podemos inferir el tipado

const badDeclaration = {
  firstName: 'facu',
  id: 11,
  image: myCustomImage
} satisfies IUser;

badDeclaration.image.data





// ESTA DECLARACION NO RECONOCE EL DATA O EL HEIGHT O WIDTH DEL CUSTOM IMAGE PORQUE EL USER IMAGE PUEDE SER TAMBIEN STRING , TAMPOCO RECONOCE LOS METODOS DE STRING

// const badDeclaration: IUser = {
//   firstName: 'facu',
//   id: 11,
//   image: myCustomImage
// }

// badDeclaration.image.
