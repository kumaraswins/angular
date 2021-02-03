import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroFeaturesComponent } from './hero-features/hero-features.component';
import { HeroPricingComponent } from './hero-pricing/hero-pricing.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MessagesComponent } from './messages/messages.component';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './token.interceptor';
import {ReactiveFormsModule} from  '@angular/forms';
import { FieldErrorDisplayComponent } from './field-error-display/field-error-display.component';
import { HighlightDirective } from './highlight.directive';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    HeroFeaturesComponent,
    HeroPricingComponent,
    PageNotFoundComponent,
    MessagesComponent,
    FormComponent,
    LoginComponent,
    FieldErrorDisplayComponent,
    HighlightDirective,
    RegistrationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
