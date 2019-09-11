import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	courses = [
		{id : 6 , name : 'java Script'},
		{id : 5 , name : 'Hibernate'},
		{id : 4 , name : 'Java'},
		{id : 3 , name : 'Advance Java'},
		{id : 2 , name : 'Angular'},
	]
}
