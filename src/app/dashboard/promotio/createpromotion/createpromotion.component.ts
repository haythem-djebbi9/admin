import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PromotionService } from 'src/app/services/promotion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-createpromotion',
  templateUrl: './createpromotion.component.html',
  styleUrls: ['./createpromotion.component.css']
})
export class CreatepromotionComponent {
  constructor(private data: PromotionService, private router: Router) { }
  
  promotion = {
    pourcentageReduction: '',
    description: '',
  }

  ajouter() {
    this.data.create(this.promotion).subscribe(
      (response: any) => {
        // La promotion a été créée avec succès
        Swal.fire('Succès', 'La promotion a été créée avec succès', 'success');
        console.log('promo cree');
        this.router.navigate(['/dashboard/promotion/list']); // Redirection après la création réussie
      },
      (error: any) => {
        // Une erreur s'est produite lors de la création de la promotion
        Swal.fire('Erreur', 'Une erreur s\'est produite lors de la création de la promotion', 'error');
      }
    );
  }

  ngOnInit(): void {
  }
}
