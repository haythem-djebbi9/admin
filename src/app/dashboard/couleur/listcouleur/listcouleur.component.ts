import { Component } from '@angular/core';
import { CouleurService } from 'src/app/services/couleur.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listcouleur',
  templateUrl: './listcouleur.component.html',
  styleUrls: ['./listcouleur.component.css']
})
export class ListcouleurComponent {

  constructor(private data: CouleurService) { }
  showButtons: boolean = false; // Déclaration de la propriété showButtons

  couleurs: any;

  ngOnInit(): void {
    this.data.getallcouleur().subscribe(
      res => {
        this.couleurs = res;
        
      }
    );
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

