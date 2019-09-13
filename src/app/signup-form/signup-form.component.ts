import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  
  form = new FormGroup({
    username : new FormControl('' , [
      Validators.required , 
      Validators.minLength(3) , 
      Validators.maxLength(15),
    ]),
    password : new FormControl('' , Validators.required)
  })

  get username(){
    console.log('username getter called');
    return this.form.get('username');
  }
  get password(){
    console.log('password getter called..');
    return this.form.get('password');
  }

  constructor() {
  }

  ngOnInit() {
  }

}
