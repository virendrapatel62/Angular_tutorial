import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ChangePasswordFormValidators } from 'src/common/validators/change-password-form';

@Component({
  selector: 'change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.css']
})
export class ChangePasswordFormComponent {
	newpassword = new FormControl('' , Validators.required)
	form = new FormGroup({
		oldPassword : new FormControl('' , Validators.required , ChangePasswordFormValidators.oldPasswordValidator),
		newPassword : this.newpassword,
		newPasswordAgain : new FormControl('' , [Validators.required , ChangePasswordFormValidators.PasswordNotMatched(this.newpassword)])
	});

	get oldPassword(){
		return this.form.get('oldPassword')
	}
	get newPassword(){
		return this.form.get('newPassword')
	}
	get newPasswordAgain(){
		return this.form.get('newPasswordAgain')
	}

	change(){
		console.log(this.form.value);
	}


}
