import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LivreursService {


  constructor(private http: HttpClient) { }

  url = 'http://127.0.0.1:3000/';

  getall() {
    return this.http.get(this.url + 'livreur/livreurs');
  }
  create(livreur: any){

    return this.http.post( this.url + 'livreur/register' , livreur );

  }
  supprimer(id: any){

    return this.http.delete( this.url + 'livreur/livreur/' + id  );

  }

}
