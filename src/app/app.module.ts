import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { NavbarComponent } from './dashboard/navbar/navbar.component';
import { FooterComponent } from './dashboard/footer/footer.component';
import { ListcategorieComponent } from './dashboard/categorie/listcategorie/listcategorie.component';
import { HttpClientModule } from '@angular/common/http';
import { AjoutcategorieComponent } from './dashboard/categorie/ajoutcategorie/ajoutcategorie.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AjoutadminsComponent } from './dashboard/admins/ajoutadmins/ajoutadmins.component';
import { AjoutlivreurComponent } from './dashboard/livreur/ajoutlivreur/ajoutlivreur.component';
import { ListcouleurComponent } from './dashboard/couleur/listcouleur/listcouleur.component';
import { AjoutcouleurComponent } from './dashboard/couleur/ajoutcouleur/ajoutcouleur.component';
import { ModifiercouleurComponent } from './dashboard/couleur/modifiercouleur/modifiercouleur.component';
import { ListComponent } from './dashboard/commandelouleur/list/list.component';
import { PowerbiComponent } from './dashboard/powerbi/powerbi.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    ListcategorieComponent,
    AjoutcategorieComponent,
    UpdatecategorieComponent,
    ListproduitComponent,
    AjoutproduitComponent,
    UpdateproduitComponent,
    ListfeedbackComponent,
    CreatepromotionComponent,
    ListprmotionComponent,
    ListcommandeComponent,
    ListadminsComponent,
    ListlivreurComponent,
    LoginComponent,
    DashboardComponent,
    AjoutadminsComponent,
    AjoutlivreurComponent,
    ListcouleurComponent,
    AjoutcouleurComponent,
    ModifiercouleurComponent,
    ListComponent,
    PowerbiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
