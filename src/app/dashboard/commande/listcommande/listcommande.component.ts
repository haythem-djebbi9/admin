import { Component, OnInit } from '@angular/core';
import { CommandeService } from 'src/app/services/commande.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listcommande',
  templateUrl: './listcommande.component.html',
  styleUrls: ['./listcommande.component.css']
})
export class ListcommandeComponent implements OnInit {
  commandes: any;

  constructor(public data: CommandeService) { }

  ngOnInit(): void {
    this.getCommandes();
  }

  getCommandes(): void {
    this.data.getall().subscribe(
      res => {
        this.commandes = res;
      },
      err => {
        console.error(err);
      }
    );
  }

  accepterCommande(commandeId: string): void {
    this.data.accepterCommande(commandeId).subscribe(
      () => {
        Swal.fire('Succès', 'Commande acceptée avec succès', 'success');
        this.getCommandes(); // Rafraîchir la liste des commandes après l'acceptation
      },
      (error) => {
        Swal.fire('Erreur', 'Erreur lors de l\'acceptation de la commande', 'error');
      }
    );
  }
}
