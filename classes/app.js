;
(function () {
    var Avenger = /** @class */ (function () {
        function Avenger(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        Avenger.getAvgAge = function () {
            return this.name;
        };
        // BY DEFECT METHODS ARE PUBLIC
        Avenger.prototype.bio = function () {
            return "".concat(this.name, "  (").concat(this.team, ")");
        };
        Avenger.avgAge = 35;
        return Avenger;
    }());
    var antman = new Avenger('AntMan', 'Capital', 'scoty land');
    console.log(antman.bio());
    console.log(Avenger.getAvgAge());
})();
