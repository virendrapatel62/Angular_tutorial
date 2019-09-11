import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'course',
	// two way bindin ...
	template: `
			<input [value]='email2' (keyup.enter)='email=$event.target.value; onEnterKeyPress();'/>
			<hr>
			<input [(ngModel)]="email" (keyup.enter)='onEnterKeyPress();'/>
		`,
})
export class CourseComponent {
	email = 'someEmail@gmail.com' ;
	email2 = 'someEmail@gmail.com' ;
	onEnterKeyPress() {
		console.log(this.email);
	}
}
