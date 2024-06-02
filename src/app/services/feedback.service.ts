import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http: HttpClient) { }

  url = 'http://127.0.0.1:3000/';

  getall() {
    return this.http.get(this.url + 'feedback/all');
  }
  setFeedbackAffiche(feedbackId: string) {
    return this.http.put(`${this.url}feedback/affiche/${feedbackId}`, {});
  }
}