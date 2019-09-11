import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'course',
  template: `
        <button class='btn btn-info' [class.disabled]='isActive' >Click Me</button>      
    `,
})
export class CourseComponent {
	isActive = true
}
