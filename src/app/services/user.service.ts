import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) {

  }

  getUsers() {
    return this.http.get(this.url)
  }

  createUser(post) {
    return this.http.post(this.url, post)
  }

  deleteUser(user){
    return this.http.delete(this.url + "/" + user['id'])
  }
}
