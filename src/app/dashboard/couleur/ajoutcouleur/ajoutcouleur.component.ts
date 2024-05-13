import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CouleurService } from 'src/app/services/couleur.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ajoutcouleur',
  templateUrl: './ajoutcouleur.component.html',
  styleUrls: ['./ajoutcouleur.component.css']
})
export class AjoutcouleurComponent {

  couleurForm: FormGroup;
  photo: any;

  constructor(
    private fb: FormBuilder,
    private couleurService: CouleurService,
    private router : Router
  ) {
    this.couleurForm = this.fb.group({
      codec: ['', Validators.required],
      image: [''] // Retirez Validators.required si l'image n'est pas obligatoire
    });
  }

  selectPhoto(event: any) {
    this.photo = event.target.files[0];
  }

  ajouterCouleur() {
    const formData = new FormData();
    formData.append('codec', this.couleurForm.value.codec);
    if (this.photo) {
      formData.append('image', this.photo);
    }

    this.couleurService.create(formData).subscribe(
      (res: any) => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'La couleur a été ajoutée avec succès',
          showConfirmButton: false,
          timer: 1500
        });
        // Réinitialise le formulaire après l'ajout de la couleur
        this.couleurForm.reset();
        this.router.navigate(['/dashboard/couleur/list']);

      },
      error => {
        console.log(error);
      }
    );
  }
}
