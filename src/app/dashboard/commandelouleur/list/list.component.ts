import { Component } from '@angular/core';
import { CouleurService } from 'src/app/services/couleur.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  constructor(public data: CouleurService ) { }

  commandes:any;

  ngOnInit(): void {

    this.data.getallcommande()
      .subscribe(
        res=>{
          this.commandes = res;
        },
        err=>{
          console.log(err);
          
        }
      );

  }
}


