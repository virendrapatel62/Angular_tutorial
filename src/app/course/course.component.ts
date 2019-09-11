import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'course',
  template: `
			<input type='text' class='form-control' (keyup)='onKeyPress($event);'>
		`,
})
export class CourseComponent {
	color = true;

	onKeyPress($event){
		($event.keyCode == 13) ? console.log("Enter Key is Pressed..")
		 : ''			
	}
}
