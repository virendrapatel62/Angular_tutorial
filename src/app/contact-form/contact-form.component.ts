import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-contact-form',
	templateUrl: './contact-form.component.html',
	styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent{

	contactMethods = [
		{id: 1, name: 'Credit Card'},
		{id: 2, name: 'Paypal'},
		{id: 3, name: 'Paytm'},
		{id: 4, name: 'Phonepay'},
		{id: 5, name: 'Debit Card'},
	]


	constructor() {

	}

	log(firstName){
		console.log(firstName);
	}

	submit(form){
		console.log(form);
		console.log(form.value);
	}
}
