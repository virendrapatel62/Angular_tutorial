import { Component, OnInit } from '@angular/core';
import { FavoriteChangeEventArgs } from '../favorite/favorite.component';
import { CoursesService } from './courses.service';

@Component({
	selector: 'courses',
	templateUrl : './course.component.html'
})
export class CourseComponent {
	courses = []
	
}