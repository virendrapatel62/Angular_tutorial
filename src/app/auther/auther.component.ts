import { Component, OnInit } from '@angular/core';
import { AutherService } from './auther.service';

@Component({
  selector: 'app-auther',
  templateUrl : './auther.component.html' 
})
export class AutherComponent implements OnInit {

  authers
  constructor(service : AutherService) { 
    this.authers = service.getAuthers();
  }

  ngOnInit() {
  }

}
