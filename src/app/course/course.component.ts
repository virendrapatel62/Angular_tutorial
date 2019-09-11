import { Component, OnInit } from '@angular/core';
import { FavoriteChangeEventArgs } from '../favorite/favorite.component';

@Component({
	selector: 'course',
	templateUrl : './course.component.html'
})
export class CourseComponent {
	post = {
		title : 'title', 
		isFavorite : false 
	}

	onFavoriteChange(eventArgs : FavoriteChangeEventArgs){
		console.log(eventArgs);
	}
}