import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/catch"
import "rxjs/add/operator/map"

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private url: string, private http: HttpClient) {

  }

  getAll() {
    return this.http.get(this.url)
    .catch(this.handleError);
  }

  update() {

  }

  delete(id) {
    return this.http.delete(this.url + "/" + id)
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(new Error())
  }


}
