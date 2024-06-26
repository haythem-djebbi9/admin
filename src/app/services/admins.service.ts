import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminsService {

  constructor(private http: HttpClient) { }

  url = 'http://127.0.0.1:3000/';

  getall() {
    return this.http.get(this.url + 'admin/admins');
  }
  create(admin: any){

    return this.http.post( this.url + 'admin/register' , admin );

  }
  supprimer(id: any){

    return this.http.delete( this.url + 'admin/admin/' + id  );

  }

}
