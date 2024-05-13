import { Component } from '@angular/core';
import { FeedbackService } from 'src/app/services/feedback.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-listfeedback',
  templateUrl: './listfeedback.component.html',
  styleUrls: ['./listfeedback.component.css']
})
export class ListfeedbackComponent {
  constructor(public data: FeedbackService , public userserv: UserService ) { }

  feedbackk:any;

  ngOnInit(): void {

  
      this.data.getall().subscribe(
        res => {
          this.feedbackk = res;
          this.loadUserDetails();
        }
      );
    }
  
    loadUserDetails() {
      this.feedbackk.forEach((item: any) => {
        const userId = item.user?._id; // Assurez-vous que item.user existe avant d'accéder à _id
        if (userId) {
          this.userserv.getbyid(userId).subscribe(
            (user: any) => {
              item.user = user; // Ajouter les détails de l'utilisateur au feedback
            },
            (error) => {
              console.error(error); // Gérer les erreurs éventuelles
            }
          );
        }
      });
    }
  }

