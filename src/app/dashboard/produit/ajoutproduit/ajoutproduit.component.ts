import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategorieserviceService } from 'src/app/services/categorieservice.service';
import { ProduitserviceService } from 'src/app/services/produitservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ajoutproduit',
  templateUrl: './ajoutproduit.component.html',
  styleUrls: ['./ajoutproduit.component.css']
})
export class AjoutproduitComponent implements OnInit {
  produitForm: FormGroup;
  categories: any[] = [];
  produit: any; 
  photo: any;

  constructor(  
    private fb: FormBuilder,
    private datadep: CategorieserviceService, 
    private dataemp: ProduitserviceService,
    private router: Router
  ) {
    let controls = {
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      prix: new FormControl('', [Validators.required]),
      quantite: new FormControl(0, [Validators.required]),
      idCat: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required])
    };
      
    this.produitForm = this.fb.group(controls);
  }
    
  ngOnInit(): void {
    this.loadCategories();
    this.loadCategorieDetails();
  }

  loadCategories() {
    this.datadep.getall().subscribe(
      (categories: any) => {
        this.categories = categories;
      },
      error => {
        console.error("Erreur lors du chargement des catégories :", error);
      }
    );
  }

  loadCategorieDetails() {
    this.dataemp.getallproduit().subscribe(
      (produits: any) => {
        this.produit = produits;
      },
      error => {
        console.error("Erreur lors de la récupération des produits :", error);
      }
    );
  }
  
  select(e: any){
    this.photo = e.target.files[0];
  }

  ajout(){
    let formdata = new FormData();
    formdata.append('name', this.produitForm.value.name);
    formdata.append('description', this.produitForm.value.description);
    formdata.append('prix', this.produitForm.value.prix);
    formdata.append('quantite', this.produitForm.value.quantite);
    formdata.append('idCat', this.produitForm.value.idCat);
    formdata.append('image', this.photo);

    this.dataemp.create(formdata).subscribe(
      res => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Votre produit a été enregistré',
          showConfirmButton: false,
          timer: 1500
        });
        this.router.navigate(['/dashboard/produit/list']);
      },
      error => {
        console.error("Erreur lors de la création du produit :", error);
        // Gérer les erreurs ici, par exemple afficher un message à l'utilisateur
      }
    );
  }
}
