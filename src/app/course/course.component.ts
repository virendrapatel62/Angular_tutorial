import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'course',
  template: `
      <img [src]='imageUrl'>
      <table>
          <tr>
            <!-- <td [colspan]='colSpan'>Some Text</td>  no dome element like colspan error-->

            <td [attr.colspan]='colSpan'>Some Text</td>
            <td>Some Text</td>
            <td [attr.colspan]='colSpan'>Some Text</td>
          </tr>
          <tr>
            <!-- <td [colspan]='colSpan'>Some Text</td>  no dome element like colspan error-->

            <td>Some Text</td>
            <td>Some Text</td>
          </tr>
      </table>
    `,
})
export class CourseComponent {
  imageUrl = 'http://lorempixel.com/300/200/sports/2/'
  colSpan = 2;
}
