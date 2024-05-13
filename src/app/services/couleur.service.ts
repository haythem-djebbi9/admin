import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CouleurService {

  constructor(private http: HttpClient) { }

  url = 'http://127.0.0.1:3000/';

  getallcouleur() {
    return this.http.get(this.url + 'couleur/all');
  }

  create(couleur: any){

    return this.http.post( this.url + 'couleur/create' , couleur );

  }


  supprimer(id: any){

    return this.http.delete( this.url + 'couleur/supprimer/' + id  );

  }

  getbyid(id: any){

    return this.http.get( this.url + 'couleur/getbyid/' + id  );

  }


  update(id: any , couleur: any){

    return this.http.put( this.url + 'couleur/update/' + id  , couleur );

  }
 
  getallcommande() {
    return this.http.get(this.url + 'commandecouleur/all');
  }


}
