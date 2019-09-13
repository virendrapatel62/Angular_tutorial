import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'udemy-course-form',
  templateUrl: './udemy-course-form.component.html',
  styleUrls: ['./udemy-course-form.component.css']
})
export class UdemyCourseFormComponent{

  courseCategories =[
    {id : 1 , category : 'Web Development'},
    {id : 2 , category : 'Android Development'},
    {id : 3 , category : 'Art'},
    {id : 4 , category : 'Music'},
    {id : 5 , category : 'Designing'},
  ]

  change(name){
    console.log(name);
    
  }

  constructor() {

   }

}
