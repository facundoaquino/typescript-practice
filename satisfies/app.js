var myCustomImage = {
    data: "base64",
    width: 30,
    height: 30
};
// con satifies ya sabemos que podemos inferir el tipado
var badDeclaration = {
    firstName: 'facu',
    id: 11,
    image: myCustomImage
};
badDeclaration.image.data;
// ESTA DECLARACION NO RECONOCE EL DATA O EL HEIGHT O WIDTH DEL CUSTOM IMAGE PORQUE EL USER IMAGE PUEDE SER TAMBIEN STRING , TAMPOCO RECONOCE LOS METODOS DE STRING
// const badDeclaration: IUser = {
//   firstName: 'facu',
//   id: 11,
//   image: myCustomImage
// }
// badDeclaration.image.
