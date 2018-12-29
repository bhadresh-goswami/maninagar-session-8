import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { CountrylistComponent } from './pages/country/countrylist/countrylist.component';
import { CountryaddComponent } from './pages/country/countryadd/countryadd.component';
import { CountryeditComponent } from './pages/country/countryedit/countryedit.component';
import { CountryhomeComponent } from './pages/country/countryhome/countryhome.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { CategoryComponent } from './pages/category/category.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'country', component: CountryhomeComponent, children: [
      {path:'list',component:CountrylistComponent},
      {path:'add',component:CountryaddComponent},
      {path:'edit/:id',component:CountryeditComponent},
      {path:'',component:CountrylistComponent}
    ]
  },
  { path: 'category', component: CategoryComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
