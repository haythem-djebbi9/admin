import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProduitserviceService {

  constructor(private http: HttpClient) { }

  url = 'http://127.0.0.1:3000/';

  getallproduit() {
    return this.http.get(this.url + 'produit/all');
  }

  create(produit: any){

    return this.http.post( this.url + 'produit/create' , produit );

  }


  supprimer(id: any){

    return this.http.delete( this.url + 'produit/supprimer/' + id  );

  }

  update(id: any , produit: any){

    return this.http.put( this.url + 'produit/update/' + id  , produit );

  }
  getbyid(id: any){

    return this.http.get( this.url + 'produit/getbyid/' + id  );

  }

  
}
