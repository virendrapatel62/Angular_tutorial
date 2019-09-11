import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'course',
  template: `
    <h1>Title : {{ title }}</h1>

    <h1 [textContent]='title'></h1>
    <img src={{imageUrl}}>
    <img [src]='title'>
    `,
})
export class CourseComponent {
  title = "Hello Title"
  imageUrl = 'http://lorempixel.com/300/200/sports/2/'
}
