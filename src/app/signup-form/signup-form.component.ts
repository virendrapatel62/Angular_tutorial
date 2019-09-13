import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validators';


@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  
  form = new FormGroup({

    // Third Arg is Asyn Validator ...
    username : new FormControl('' ,Validators.required, UsernameValidators.shouldBeUnique),
    password : new FormControl('' , Validators.required)
  })

  get username(){
    // console.log('username getter called');
    return this.form.get('username');
  }
  get password(){
    // console.log('password getter called..');
    return this.form.get('password');
  }

  constructor() {
  }

  ngOnInit() {
  }

  login(){
    console.log('login method');
    this.form.setErrors(
      {
        invalidLogin : true
      }
    )
  }

}
