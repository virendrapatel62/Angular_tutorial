import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'users',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent{
	users  : Array<Object>;
	url = 'http://jsonplaceholder.typicode.com/users';
	
	constructor(private http: HttpClient){
		this.getUsers();
	}

	getUsers(){
		this.http.get(this.url)
		.subscribe((response)=>{
			this.users = response as Array<Object>;	
		})
	}

	addUser(input : HTMLInputElement){
		console.log(input);
		
		let name = input.value;
		this.http.post(this.url , {name : name})
		.subscribe((response=>{
			console.log(response);
			this.users.push(response)
			input.value=''
		}))
	}

	deleteUser(user : Object){
		console.log(user);
		let index = ((this.users) as Array<Object> ).indexOf(user);
		this.users.splice(index , 1);
		this.http.delete(this.url + "/" + user['id'])
		
		.subscribe((res)=>{
			console.log(res);
			
		} , (err)=>{
			console.log(err);
			
		})
	}
}
