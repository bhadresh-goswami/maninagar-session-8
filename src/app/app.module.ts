import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  ReactiveFormsModule,
  NG_VALIDATORS,
  FormsModule,
  FormGroup,
  FormControl,
  ValidatorFn,
  Validator, EmailValidator
} from '@angular/forms';


import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmailValidatorDirective } from './helper/directives/email-validator.directive';
import { EmailValidatorN } from './emailvalidator.directive';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { CountrylistComponent } from './pages/country/countrylist/countrylist.component';
import { CountryaddComponent } from './pages/country/countryadd/countryadd.component';
import { CountryeditComponent } from './pages/country/countryedit/countryedit.component';
import { CountryhomeComponent } from './pages/country/countryhome/countryhome.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { CategoryComponent } from './pages/category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    EmailValidatorDirective,
    EmailValidatorN,
    HomeComponent,
    AboutComponent,
    CountrylistComponent,
    CountryaddComponent,
    CountryeditComponent,
    CountryhomeComponent,
    NotfoundComponent,
    CategoryComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    EmailValidatorDirective,
    EmailValidator,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
