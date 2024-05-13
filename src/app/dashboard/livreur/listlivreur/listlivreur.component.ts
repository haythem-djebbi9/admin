import { Component } from '@angular/core';
import { LivreursService } from 'src/app/services/livreurs.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listlivreur',
  templateUrl: './listlivreur.component.html',
  styleUrls: ['./listlivreur.component.css']
})
export class ListlivreurComponent {
  constructor(public data: LivreursService ) { }

  livreurs:any;

  ngOnInit(): void {

    this.data.getall()
      .subscribe(
        res=>{
          this.livreurs = res;
        },
        err=>{
          console.log(err);
          
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

  }
}
