import { Component } from '@angular/core';
import { CategorieserviceService } from 'src/app/services/categorieservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listcategorie',
  templateUrl: './listcategorie.component.html',
  styleUrls: ['./listcategorie.component.css']
})
export class ListcategorieComponent {
  constructor(public data: CategorieserviceService ) { }

  categorie:any;

  ngOnInit(): void {

    this.data.getall()
      .subscribe(
        res=>{
          this.categorie = res;
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


