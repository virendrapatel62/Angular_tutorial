import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'course',
	templateUrl : './course.component.html'
})
export class CourseComponent {
	post = {
		title : 'title', 
		isFavorite : false 
	}

	onFavoriteChange(){
		console.log('changed...');
		
	}
}