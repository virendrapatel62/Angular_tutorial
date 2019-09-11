import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'course',
	// create a pipe and regsiter in module...
	template: `
		<span [class.far]='active' [class.fas]='!active' class='fa-star' (click)='onStarClick()' ></span>
	`,
})
export class CourseComponent {
	active = true;
	onStarClick(){
		this.active = !this.active
	}
}
