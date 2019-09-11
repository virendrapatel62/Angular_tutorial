import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';

// @Component({
//   selector: 'course',
//   template: `
// 			<input type='text' 
// 			class='form-control' 
// 			(keyup.enter)='onEnterKeyPress($event);'>
// 		`,
// })
// export class CourseComponent {
// 	onEnterKeyPress($event){
// 		console.log($event.target.value);
// 	}
// }


// templateting

@Component({
	selector: 'course',
	template: `
			<input #email 
			(keyup.enter)='onEnterKeyPress(email.value);'>
		`,
})
export class CourseComponent {
	onEnterKeyPress(value) {
		console.log(value);
	}
}
