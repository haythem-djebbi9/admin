import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategorieserviceService } from 'src/app/services/categorieservice.service';
import { ProduitserviceService } from 'src/app/services/produitservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updateproduit',
  templateUrl: './updateproduit.component.html',
  styleUrls: ['./updateproduit.component.css']
})
export class UpdateproduitComponent implements OnInit {
  produitForm: FormGroup;
  id: any;
  categories: any;
  produit: any;
  photo: any;

  constructor(
    private fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private datadep: CategorieserviceService,
    private dataemp: ProduitserviceService,
    private router: Router
  ) {
    let controls = {
      name: new FormControl('', [
        Validators.required
      ]),
      description: new FormControl('', [
        Validators.required
      ]),
      prix: new FormControl('', [
        Validators.required
      ]),
      quantite: new FormControl(0, [
        Validators.required
      ]),
      idCat: new FormControl('', [
        Validators.required
      ]),
      image: new FormControl('') // Retirez Validators.required d'ici
    }

    this.produitForm = this.fb.group(controls);
  }

  select(e: any) {
    this.photo = e.target.files[0];
  }

  ngOnInit(): void {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.dataemp.getbyid(this.id)
      .subscribe(
        res => {
          this.produitForm.reset(res);
        }
      );
    this.loadCategories();
  }

  loadCategories() {
    this.datadep.getall()
      .subscribe(
        res => {
          this.categories = res;
        }
      );
  }

  update() {
    let formdata = new FormData();
    formdata.append('name', this.produitForm.value.name);
    formdata.append('description', this.produitForm.value.description);
    formdata.append('prix', this.produitForm.value.prix);
    formdata.append('quantite', this.produitForm.value.quantite);
    formdata.append('idCat', this.produitForm.value.idCat);
    
    // Vérifier si une nouvelle image a été sélectionnée
    if (this.photo) {
      formdata.append('image', this.photo);
    }
  
    this.dataemp.update(this.id, formdata)
      .subscribe(
        res => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Votre produit a été mis à jour',
            showConfirmButton: false,
            timer: 1500
          });
          this.router.navigate(['/dashboard/produit/list']);
        }
      );
  }}