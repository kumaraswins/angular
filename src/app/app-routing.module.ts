import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeroPricingComponent } from './hero-pricing/hero-pricing.component';
import { HeroFeaturesComponent } from './hero-features/hero-features.component';
import { HeroesComponent } from './heroes/heroes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  { path: '', component: HeroesComponent },
  { path: 'home', component: HeroesComponent },
  { path: 'feature', component: HeroFeaturesComponent },
  { path: 'pricing', component: HeroPricingComponent },
  { path: 'form', component: FormComponent },
  { path: '**', component:  PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
