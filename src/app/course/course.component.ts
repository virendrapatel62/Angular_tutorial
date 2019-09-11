import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'course',
  template: `
		<div (click)='onDivClick($event);'>
        <button (click)='onSave($event)' class='btn' [class.btn-success]='color' [class.btn-warning]='!color' >Save Button</button>      
		</div>
	
		`,
})
export class CourseComponent {
	color = true;

	onDivClick($event){
		console.log('Div Clicked....');
		console.log($event);
	}

	onSave($event){
		$event.stopPropagation();
		console.log('Button Was Clicked' );
		console.log($event);
		this.color = !this.color;
	}
}
