import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course',
  template: `
    <h1>Title : {{title}}</h1>
  `,
})
export class CourseComponent implements OnInit {
    title = "LIst of Course"
}
