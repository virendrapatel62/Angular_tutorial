import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'course',
  template: `
    <h1>Title : {{ title }}</h1>
    <ul>
      <li *ngFor='let course of courses'>
        {{course}}
      </li>
    </ul>
  `,
})
export class CourseComponent{
    title = "List of Course"
    courses;
    // login for fetching Courses from http Service 

    // dependency
    // angular will provide this dependecny called dependency injection 
    // register dependency in modulea pp 
    constructor(service : CoursesService){
      // by calling constructer we tightly coupled the class with this 
      // problem is while testing //
      // when we want to send parement we cave to change this line 
      // let service = new CoursesService();
      this.courses = service.getCourses();
    }
}
