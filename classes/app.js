;
(function () {
    var Avenger = /** @class */ (function () {
        // shorthand to create a class
        function Avenger(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        Avenger.avgAge = 35;
        return Avenger;
    }());
    var antman = new Avenger('AntMan', 'Capital', 'scoty land');
    console.log(antman);
    // we can call de statics properties without instance the class
    console.log(Avenger.avgAge);
})();
