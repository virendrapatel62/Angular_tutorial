import { AbstractControl, ValidationErrors } from '@angular/forms';

export class ChangePasswordFormValidators {
    static oldPasswordValidator(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('Validating...');
                if (control.value == 'mosh')
                    resolve(null)
                else
                    resolve({ oldPasswordValidator: true });
            }, 1000)
        })
    }


    static PasswordNotMatched(oldPasswordControl : AbstractControl){
        return (control : AbstractControl): ValidationErrors | null => {
            if(control.value == oldPasswordControl.value){
                return null
            }else{
                return {passwordNotMatched : true }
            }
            return null;
        }
    }
}