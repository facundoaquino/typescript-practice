//  los namespaces se usan mucho por atras , por lo bajo

namespace Validations {
	export const validateText = (text: string): boolean => {
		if (text.length > 3) {
			return true
		} else {
			return false
		}
	}

	export const validateDate = (myDate: Date): boolean => {
		return isNaN(myDate.valueOf()) ? false : true
	}
}

console.log(Validations.validateText('faac '))
