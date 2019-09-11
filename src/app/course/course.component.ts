import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'course',
	templateUrl : './course.component.html'
})
export class CourseComponent {
	text = 'some email'
	onKeyPress(value:string){
		if(!value) return
		this.text = ''
		value = value.toLowerCase()
		value = value.trim();
		let arr = value.split(' ')
		for(let i in arr){
			let s = arr[i];
			s = s.replace(s[0] , s[0].toUpperCase())+" "
			this.text += s
		}
		this.text = this.text.replace(/Of The/g , 'of the')
	}
}
