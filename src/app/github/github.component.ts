import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/github.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  followers : any[]
  constructor(private service : GithubService) { }

  ngOnInit() {
    this.service.getAll().subscribe(
      (response)=>{
        this.followers = response as Array<Object>
        console.log(this.followers);
        
      }
    )
  }


}
