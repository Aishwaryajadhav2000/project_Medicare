import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { MedicareComponent } from './pages/medicare/medicare.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl } from '@angular/forms';
import { ManageproductComponent } from './pages/manageproduct/manageproduct.component';
import { AddmedicinesComponent } from './pages/addmedicines/addmedicines.component';
import { UserhomeComponent } from './pages/userhome/userhome.component';
import { UsercartComponent } from './pages/usercart/usercart.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { UpdatemedComponent } from './pages/updatemed/updatemed.component'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MedicareComponent,
    RegistrationComponent,
    ManageproductComponent,
    AddmedicinesComponent,
    UserhomeComponent,
    UsercartComponent,
    UpdatemedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    // BrowserAnimationsModule
    Ng2SearchPipeModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
