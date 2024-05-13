import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategorieserviceService } from 'src/app/services/categorieservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updatecategorie',
  templateUrl: './updatecategorie.component.html',
  styleUrls: ['./updatecategorie.component.css']
})
export class UpdatecategorieComponent implements OnInit {

  
  id: any;
  categorie: any;

  constructor( private activatedRoute: ActivatedRoute , 
               private data: CategorieserviceService ,
               private router: Router
    ) { }

  ngOnInit(): void {

    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    this.data.getbyid(this.id)
      .subscribe(
        res=>{
          this.categorie = res;
          console.log(this.categorie);
          
        }
      );


  }

  update(){

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to update this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, update it!'
    }).then((result) => {
      if (result.isConfirmed) {
      
        this.data.update( this.id , this.categorie )
          .subscribe(
            res=>{
              this.router.navigate(['/categorie/list']);
            }
          )

      }
    })

  }


}


