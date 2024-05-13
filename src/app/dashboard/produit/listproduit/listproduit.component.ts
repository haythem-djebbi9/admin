import { Component, OnInit } from '@angular/core';
import { CategorieserviceService } from 'src/app/services/categorieservice.service';
import { ProduitserviceService } from 'src/app/services/produitservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listproduit',
  templateUrl: './listproduit.component.html',
  styleUrls: ['./listproduit.component.css']
})
export class ListproduitComponent implements OnInit  {

  constructor(private data: ProduitserviceService, private categoriservice : CategorieserviceService) { }

  produit: any;

  ngOnInit(): void {
    this.data.getallproduit().subscribe(
      res => {
        this.produit = res;
        this.loadCategorieDetails();
      }
    );
  }

  loadCategorieDetails() {
    this.produit.forEach((item: any) => {
      this.categoriservice.getCategorieById(item.idCat).subscribe(
        (categorie: any) => {
          item.categorie = categorie; // Ajoutez la catégorie aux détails du produit
        }
      );
    });
  }
  delete(id: any){

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
     
        this.data.supprimer(id)
          .subscribe(
            res=>{
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
              this.ngOnInit();
            }
          )


      }
    })

  }}

