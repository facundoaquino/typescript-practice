//  los namespaces se usan mucho por atras , por lo bajo
var Validations;
(function (Validations) {
    Validations.validateText = function (text) {
        if (text.length > 3) {
            return true;
        }
        else {
            return false;
        }
    };
    Validations.validateDate = function (myDate) {
        return isNaN(myDate.valueOf()) ? false : true;
    };
})(Validations || (Validations = {}));
console.log(Validations.validateText('faac '));
