import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { HeroFeaturesComponent } from './hero-features/hero-features.component';
import { HeroPricingComponent } from './hero-pricing/hero-pricing.component';
import { HeroesComponent } from './heroes/heroes.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'home', component: HeroesComponent },
  { path: 'feature', component: HeroFeaturesComponent },
  { path: 'list', component: HeroPricingComponent },
  { path: 'form', component: FormComponent },
  { path: 'login', component: LoginComponent },
  { path: 'reg', component: RegistrationComponent },
  { path: '**', component:  PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
