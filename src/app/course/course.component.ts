import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'course',
  template: `
			<input type='text' class='form-control' (keyup)='onKeyPress($event);'>
			<input type='text' class='form-control' (keyup.enter)='onEnterKeyPress($event);'>
		`,
})
export class CourseComponent {
	color = true;

	onKeyPress($event){
		($event.keyCode == 13) ? console.log("Enter Key is Pressed..")
		 : ''			
	}

	onEnterKeyPress($event){
		console.log('ENter KEy Is Pressed ... Event Filter....');
		
	}
}
