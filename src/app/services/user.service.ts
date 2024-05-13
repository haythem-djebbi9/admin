import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  url = 'http://127.0.0.1:3000/';

  
  getbyid(id: any){

    return this.http.get( this.url + 'user/getUserById/' + id  );

  }



}
