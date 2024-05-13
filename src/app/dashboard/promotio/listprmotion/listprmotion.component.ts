import { Component } from '@angular/core';
import { PromotionService } from 'src/app/services/promotion.service';

@Component({
  selector: 'app-listprmotion',
  templateUrl: './listprmotion.component.html',
  styleUrls: ['./listprmotion.component.css']
})
export class ListprmotionComponent {
  constructor(public data: PromotionService ) { }

  promotion:any;

  ngOnInit(): void {

    this.data.getall()
      .subscribe(
        res=>{
          this.promotion = res;
        },
        err=>{
          console.log(err);
          
        }
      );

  }
  
  }




