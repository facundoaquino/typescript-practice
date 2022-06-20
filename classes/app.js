;
(function () {
    //  Constructor privado: no se usa mucho , es para controlar como son ejecutadas nuestras instancias , puede usarse para manejar singletons
    // SINGLETON!!
    var Apocalipsis = /** @class */ (function () {
        function Apocalipsis(name) {
            this.name = name;
        }
        Apocalipsis.callApocalipsis = function () {
            if (!Apocalipsis.intance) {
                Apocalipsis.intance = new Apocalipsis('Soy Apocalipsis unicooo');
            }
            return Apocalipsis.intance;
        };
        return Apocalipsis;
    }());
    // const apocalipsis1 = new Apocalipsis('Soy apoca the one')
    // const apocalipsis2 = new Apocalipsis('Soy apoca the one')
    // const apocalipsis3 = new Apocalipsis('Soy apoca the one')
    // console.log(apocalipsis1)
    // console.log(apocalipsis2)
    // console.log(apocalipsis3)
    var apocalipsis1 = Apocalipsis.callApocalipsis();
    console.log(apocalipsis1);
})();
