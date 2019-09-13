import { AbstractControl, ValidationErrors } from '@angular/forms';
export class UsernameValidators {
    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if ((<string>control.value).indexOf(' ') >= 0) {
            return { cannotContainSpace: 'true' }
        } else {
            return null;
        }
    }


    static shouldBeUnique(control: AbstractControl): ValidationErrors | null {
        // asychronous Request 
        //....
        setTimeout(() => {
            console.log('sending request to server ==== ok');

            if (control.value == 'Virendra') {
                return { shouldBeUnique: true };
            }
        }, 2000)
        return null;

        // it always return null this is the problem so next example will solve it 
    }
}