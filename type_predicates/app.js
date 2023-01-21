// type predicates
var Cat = /** @class */ (function () {
    function Cat() {
        this.species = 'cat';
    }
    Cat.prototype.meow = function () {
        console.log('meooou');
    };
    return Cat;
}());
function petIsCat(pet) {
    return pet.species === 'cat';
}
function petIsCatBoolean(pet) {
    return pet.species === 'cat';
}
var newCat = new Cat();
//YA RECONOCE QUE ES CAT DENTRO DEL IF SINO HABRIA QUE CASTEARLO
if (petIsCat(newCat)) {
    newCat.meow();
}
// aca no lo conoce
if (petIsCatBoolean(newCat)) {
    newCat.meow();
}
