import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'course',
  template: `
        <button [style.backgroundColor]="isActive ? 'white' : 'gray' ">Save Button</button>      
    `,
})
export class CourseComponent {
	isActive = true
}
