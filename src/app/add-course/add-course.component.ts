import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {

  constructor() { }

  form = new FormGroup({
    topics: new FormArray([])
  });

  saveCourse(topic: HTMLInputElement) {
    console.log(topic.value);
    this.topics.push(new FormControl(topic.value));
    topic.value = ""
  }

  remove(topic: FormControl) {
    let index = this.topics.controls.indexOf(topic);
    // this.topics.controls.splice(index , 1)
    this.topics.removeAt(index)
  }

  get topics() {
    return this.form.get('topics') as FormArray
  }

}
