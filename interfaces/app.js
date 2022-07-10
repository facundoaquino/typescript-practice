;
(function () {
    console.log('Interfaces');
    // no podemos extender de la interface ... tenemos que implementarla
    var Mutant = /** @class */ (function () {
        function Mutant() {
        }
        Mutant.prototype.mutantPowe = function (id) {
            return this.name;
        };
        return Mutant;
    }());
})();
