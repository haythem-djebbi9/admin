import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CouleurService } from 'src/app/services/couleur.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modifiercouleur',
  templateUrl: './modifiercouleur.component.html',
  styleUrls: ['./modifiercouleur.component.css']
})
export class ModifiercouleurComponent implements OnInit {

  couleurForm: FormGroup;
  id: any;
  couleur: any;
  photo: any;

  constructor(
    private fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private couleurService: CouleurService,
    private router: Router
  ) {
    this.couleurForm = this.fb.group({
      codec: ['', Validators.required],
      image: [''] // Supprimez Validators.required si l'image n'est pas obligatoire
    });
  }

  selectPhoto(event: any) {
    this.photo = event.target.files[0];
  }

  ngOnInit(): void {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.getCouleurDetails();
  }

  getCouleurDetails() {
    this.couleurService.getbyid(this.id).subscribe((data: any) => {
      this.couleur = data;
      this.couleurForm.patchValue({
        codec: this.couleur.codec,
      });
    });
  }

  updateCouleur() {
    const formData = new FormData();
    formData.append('codec', this.couleurForm.value.codec);
    if (this.photo) {
      formData.append('image', this.photo);
    }

    this.couleurService.update(this.id, formData).subscribe(
      (res: any) => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'La couleur a été mise à jour avec succès',
          showConfirmButton: false,
          timer: 1500
        });
        this.router.navigate(['/dashboard/couleur/list']);
      },
      error => {
        console.log(error);
      }
    );
  }
  select(e: any) {
    this.photo = e.target.files[0];
  }

}
