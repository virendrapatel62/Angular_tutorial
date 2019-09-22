import { AbstractControl, ValidationErrors } from '@angular/forms';
export class UsernameValidators {
    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if ((<string>control.value).indexOf(' ') >= 0) {
            return { cannotContainSpace: 'true' }
        } else {
            return null;
        }
    }


    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
        // asychronous Request 
        //....
        console.log('Should Be Unique...');
        

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('sending request to server ==== ok');
                if (control.value == 'Virendra') {
                    resolve( { shouldBeUnique: true });
                }else{
                    resolve(null)
                }
            }, 2000)
        })

    }
}