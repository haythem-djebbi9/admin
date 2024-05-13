import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategorieserviceService {

  constructor(private http: HttpClient) { }

  url = 'http://127.0.0.1:3000/';

  getall() {
    return this.http.get(this.url + 'categorie/getall');
  }

 
  getCategorieById(id: string) {
    return this.http.get(this.url + 'categorie/byid/' + id); // Correction de la construction de l'URL
  }
  create(cat: any){

    return this.http.post( this.url + 'categorie/create' , cat );

  }

  getbyid(id: any){

    return this.http.get( this.url + 'categorie/byid/' + id  );

  }


  supprimer(id: any){

    return this.http.delete( this.url + 'categorie/del/' + id  );

  }

  update(id: any , dep: any){

    return this.http.put( this.url + 'categorie/update/' + id  , dep );

  }

}


