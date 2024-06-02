import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  constructor(private http: HttpClient) { }

  url = 'http://127.0.0.1:3000/';

  getall() {
    return this.http.get(this.url + 'commande/commandes');
  }

  accepterCommande(commandeId: string): Observable<any> {
    return this.http.patch(`${this.url}commande/accepter/${commandeId}`, {});
  }

  


}
