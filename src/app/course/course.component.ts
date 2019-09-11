import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course',
  template: `
    <h1>Title : {{ getTitle() }}</h1>
  `,
})
export class CourseComponent{
    title = "List of Course using Method"

    getTitle(){
      return this.title;
    }
}
