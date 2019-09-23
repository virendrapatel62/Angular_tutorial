import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../services/user.service';
import { NotFoundError } from 'src/common/not-found-error';

@Component({
	selector: 'users',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
	users: Array<Object>;


	constructor(private service: UserService) {
		// donot call http request in constructer 
	}

	ngOnInit() {
		this.getUsers();
	}

	getUsers() {
		this.service.getUsers()
			.subscribe((response) => {
				this.users = response as Array<Object>;
			} , (error)=>{
					console.log('error Occurd... in Getting User');
					
			})
	}

	addUser(input: HTMLInputElement) {
		console.log(input);

		let name = input.value;
		let user = { name: name };
		this.service.createUser(user)
			.subscribe(
				response => {
					console.log(response);
					this.users.push(response)
					input.value = ''
				},

				(error : Response) => {
					if(error instanceof NotFoundError){
						alert('USer Not Found...')
					}
					else{
						alert('Error OCCurd...')
					}
				}

			)
	}

	deleteUser(user: Object) {
		console.log(user);
		let index = ((this.users) as Array<Object>).indexOf(user);
		this.users.splice(index, 1);
		this.service.deleteUser(user)
			.subscribe((res) => {
				console.log(res);

			}, (err : Response ) => {
				(err instanceof NotFoundError) ? (alert('User Already Deleted ...')) : alert('error');

			})
	}
}
