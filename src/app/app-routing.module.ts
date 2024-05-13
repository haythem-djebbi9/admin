import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutcategorieComponent } from './dashboard/categorie/ajoutcategorie/ajoutcategorie.component';
import { ListcategorieComponent } from './dashboard/categorie/listcategorie/listcategorie.component';
import { UpdatecategorieComponent } from './dashboard/categorie/updatecategorie/updatecategorie.component';
import { ListproduitComponent } from './dashboard/produit/listproduit/listproduit.component';
import { AjoutproduitComponent } from './dashboard/produit/ajoutproduit/ajoutproduit.component';
import { UpdateproduitComponent } from './dashboard/produit/updateproduit/updateproduit.component';
import { ListfeedbackComponent } from './dashboard/feedback/listfeedback/listfeedback.component';
import { CreatepromotionComponent } from './dashboard/promotio/createpromotion/createpromotion.component';
import { ListprmotionComponent } from './dashboard/promotio/listprmotion/listprmotion.component';
import { ListcommandeComponent } from './dashboard/commande/listcommande/listcommande.component';
import { ListadminsComponent } from './dashboard/admins/listadmins/listadmins.component';
import { ListlivreurComponent } from './dashboard/livreur/listlivreur/listlivreur.component';
import { AuthGuard } from './services/auth.guard';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AjoutadminsComponent } from './dashboard/admins/ajoutadmins/ajoutadmins.component';
import { AjoutlivreurComponent } from './dashboard/livreur/ajoutlivreur/ajoutlivreur.component';
import { ListcouleurComponent } from './dashboard/couleur/listcouleur/listcouleur.component';
import { AjoutcouleurComponent } from './dashboard/couleur/ajoutcouleur/ajoutcouleur.component';
import { ModifiercouleurComponent } from './dashboard/couleur/modifiercouleur/modifiercouleur.component';
import { ListComponent } from './dashboard/commandelouleur/list/list.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', canActivate: [AuthGuard], component: DashboardComponent, children: [
    { path: '', redirectTo: 'categorie/list', pathMatch: 'full' },
    { path: 'categorie/ajout', component: AjoutcategorieComponent },
    { path: 'categorie/list', component: ListcategorieComponent },
    { path: 'categorie/update/:id', component: UpdatecategorieComponent },
    { path: 'produit/list', component: ListproduitComponent },
    { path: 'produit/ajout', component: AjoutproduitComponent },
    { path: 'produit/update/:id', component: UpdateproduitComponent },
    { path: 'feedback/list', component: ListfeedbackComponent },
    { path: 'promotion/ajout', component: CreatepromotionComponent },
    { path: 'promotion/list', component: ListprmotionComponent },
    { path: 'commande/list', component: ListcommandeComponent },
    { path: 'admin/list', component: ListadminsComponent },
    { path: 'admin/ajout', component: AjoutadminsComponent },
    { path: 'livreur/list', component: ListlivreurComponent },
    { path: 'livreur/ajout', component: AjoutlivreurComponent },
    { path: 'couleur/list', component: ListcouleurComponent },
    { path: 'couleur/ajout', component: AjoutcouleurComponent },

    { path: 'couleur/modifier/:id', component: ModifiercouleurComponent },

    { path: 'commandecouleur/list', component: ListComponent },


  ]},
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
