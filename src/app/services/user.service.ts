import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/catch';
import { AppError } from 'src/common/app-error';
import { NotFoundError } from 'src/common/not-found-error';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) {

  }

  getUsers() {
    return this.http.get(this.url)
    .catch((error : Response)=>{
      if(error.status == 404 ){
        return Observable.throw(new NotFoundError(error));
      }
      else{
        return Observable.throw(new AppError(error))
      }
    })
  }

  createUser(post) {
    return this.http.post(this.url, post)
      .catch((error: Response) => {
        if(error.status == 404 ){
          return Observable.throw(new NotFoundError(error));
        }
        return Observable.throw(new AppError(error));
      })
  }

  deleteUser(userId) {
    console.log(userId);
    
    return this.http.delete(this.url + "/" + userId)
    .catch((error : Response)=>{
      if(error.status === 404 ){
        console.log('Already deleted');
        return Observable.throw(new NotFoundError(error));
      }
      else{
        return Observable.throw(new AppError(error))
      }
    })
  }
}
