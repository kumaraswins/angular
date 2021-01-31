import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeroPricingComponent } from './hero-pricing/hero-pricing.component';
import { HeroFeaturesComponent } from './hero-features/hero-features.component';
import { HeroesComponent } from './heroes/heroes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HeroesComponent },
  { path: 'feature', component: HeroFeaturesComponent },
  { path: 'list', component: HeroPricingComponent },
  { path: 'form', component: FormComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component:  PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
