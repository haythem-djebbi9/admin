import { Component, ElementRef } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  isLoggedIn: boolean = false; // Définir à true si l'utilisateur est connecté

  constructor(private elementRef: ElementRef, private _auth: AuthService) {
    // Initialiser isLoggedIn en fonction de l'état de connexion réel de l'utilisateur
    this.isLoggedIn = this._auth.isLoggedIn(); // Appeler la méthode isLoggedIn() de votre service AuthService
  }

  toggleSidebar() {
    this.elementRef.nativeElement.querySelector('#sidebar').classList.toggle('expand');
  }
}
