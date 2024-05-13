import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LivreursService } from 'src/app/services/livreurs.service';

@Component({
  selector: 'app-ajoutlivreur',
  templateUrl: './ajoutlivreur.component.html',
  styleUrls: ['./ajoutlivreur.component.css']
})
export class AjoutlivreurComponent {
  livreur: any = {}; 
        constructor(private _auth:LivreursService,private router:Router) { }
    
      ngOnInit(): void {
      }
    
  registre(){
    this._auth.create(this.livreur)
    .subscribe({

next:(res)=>{
this.router.navigate(['/dashboard/livreur/list']);
},
error:(err)=>{
  console.log(err);
  
}


    })
  }
}

