import { Component } from '@angular/core';
import { CommandeService } from 'src/app/services/commande.service';

@Component({
  selector: 'app-listcommande',
  templateUrl: './listcommande.component.html',
  styleUrls: ['./listcommande.component.css']
})
export class ListcommandeComponent {
  constructor(public data: CommandeService ) { }

  commandes:any;

  ngOnInit(): void {

    this.data.getall()
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
