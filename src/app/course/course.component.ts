import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'course',
	// two way bindin ...
	template: `
		Title : {{course.title| uppercase}} <br/>
		Rating : {{course.rating | number:'1.2-3'}} <br/>
		Student : {{course.students | number }} <br/>
		Prize : {{course.prize | currency : 'AUD'}} <br/>
		Date : {{course.releaseDate | date: 'short'}} <br/>
	`,
})
export class CourseComponent {
	course = {
		title : 'Angular js Bu Mosh Hamedani sir ' ,
		rating : 5.212623,
		students : 456565,
		prize : 168.365, 
		releaseDate : new Date(2019 , 12 , 25)
	}
}
