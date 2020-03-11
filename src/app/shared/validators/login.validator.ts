import { AbstractControl } from '@angular/forms';

export class LoginValidators {
    static validateEmailId(control: AbstractControl): any {
        let emailIdPattern: RegExp = /[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]+/;
        if (!emailIdPattern.test(control.value)) {
            return { "emailIdPatternError": true }
        }
        return null;
	}
	
}
