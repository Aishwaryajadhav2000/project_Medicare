import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicareComponent } from './pages/medicare/medicare.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { ManageproductComponent } from './pages/manageproduct/manageproduct.component';
import { AddmedicinesComponent } from './pages/addmedicines/addmedicines.component';
import { UsercartComponent } from './pages/usercart/usercart.component';
import { UserhomeComponent } from './pages/userhome/userhome.component';
import { UpdatemedComponent } from './pages/updatemed/updatemed.component';
const routes: Routes = [
  {path:'', component:MedicareComponent},
  {path:'login', component:LoginComponent},
  {path:'registration', component:RegistrationComponent},
  {path:'manageproducts', component:ManageproductComponent},
  {path:'addmedicines', component:AddmedicinesComponent},
  {path:'usercart/:id', component:UsercartComponent},
  {path:'userhome', component: UserhomeComponent},
  {path:'updatemedicin/:medicinId', component: UpdatemedComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
