import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(private http: HttpClient) { }

  url = 'http://127.0.0.1:3000/';

  create(pro: any) {
    return this.http.post(this.url + 'promotion/create' ,pro);
  }
  getall() {
    return this.http.get(this.url + 'promotion/getall');
  }

}
