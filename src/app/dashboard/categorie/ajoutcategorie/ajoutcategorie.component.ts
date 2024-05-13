import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CategorieserviceService } from 'src/app/services/categorieservice.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-ajoutcategorie',
  templateUrl: './ajoutcategorie.component.html',
  styleUrls: ['./ajoutcategorie.component.css']
})
export class AjoutcategorieComponent {

  constructor(private data: CategorieserviceService, private router: Router) { }
  categorie = {

    name: '',
    description: '',
   

  }
  ajouter() {
    this.data.create(this.categorie)
      .subscribe(
        res => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your dep has been saved',
            showConfirmButton: false,
            timer: 1500
          });
  
          // Redirection vers la liste des catégories après la création réussie
          this.router.navigate(['/categorie/list']);
        },
        err => {
          console.error('Erreur lors de la création de la catégorie :', err);
          // Gérer les erreurs ici, si nécessaire
        }
      );
  }
  

  ngOnInit(): void {
  }

}

