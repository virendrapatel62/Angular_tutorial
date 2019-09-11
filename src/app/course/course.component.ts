import { Component, OnInit } from '@angular/core';

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
}
