var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
;
(function () {
    var Mutante = /** @class */ (function () {
        function Mutante(name, realName) {
            this.name = name;
            this.realName = realName;
        }
        return Mutante;
    }());
    var Xmen = /** @class */ (function (_super) {
        __extends(Xmen, _super);
        function Xmen() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Xmen.prototype.salvarMundo = function () {
            console.log('Salvando mundo...');
        };
        return Xmen;
    }(Mutante));
    var Villian = /** @class */ (function (_super) {
        __extends(Villian, _super);
        function Villian() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Villian;
    }(Mutante));
    var wolverine = new Xmen('wolverine', 'logan');
})();
