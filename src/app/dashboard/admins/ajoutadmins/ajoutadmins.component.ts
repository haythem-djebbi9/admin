import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminsService } from 'src/app/services/admins.service';

@Component({
  selector: 'app-ajoutadmins',
  templateUrl: './ajoutadmins.component.html',
  styleUrls: ['./ajoutadmins.component.css']
})
export class AjoutadminsComponent {
  admin: any = {}; 
        constructor(private _auth:AdminsService,private router:Router) { }
    
      ngOnInit(): void {
      }
    
      registre(){
        this._auth.create(this.admin)
        .subscribe({
    
    next:(res)=>{
    this.router.navigate(['/dashboard/admin/list']);
    },
    error:(err)=>{
      console.log(err);
      
    }
    
    
        })
      }
    }

