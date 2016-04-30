import { Injectable } from "angular2/core";
import { AbstractControl } from "angular2/common";

@Injectable()
export default class ValidationService {
    
    static emailValidator(control: AbstractControl): {[key: string]: boolean} {
        // RFC 2822 compliant regex
        const validEmailPattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        return validEmailPattern.test(control.value) ? null : { "invalidEmailAddress": true };
    }
    
}

export const emailValidator = ValidationService.emailValidator;