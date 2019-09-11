import { Component, OnInit } from '@angular/core';
import { AutherService } from './auther.service';

@Component({
  selector: 'app-auther',
  template : `
    <h1>{{authers.length}} Auther</h1>

    <table border='1'>
      <tr *ngFor='let auther of authers ;index as i'>
        <td>{{i+1}} => {{auther}}</td>
      </tr>
    </table>
  `
})
export class AutherComponent implements OnInit {

  authers
  constructor(service : AutherService) { 
    this.authers = service.getAuthers();
  }

  ngOnInit() {
  }

}
