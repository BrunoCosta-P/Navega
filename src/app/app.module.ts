import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { FormLoginComponent } from './modules/form-login/form-login.component';
import { BackgroundLoginComponent } from './modules/background-login/background-login.component';
import { NavbarComponent } from './modules/navbar/navbar.component';
import { HeaderComponent } from './modules/header/header.component';
import { ContributionComponent } from './modules/contribution/contribution.component';
import { PlansComponent } from './modules/plans/plans.component';
import { EmptyStateComponent } from './modules/empty-state/empty-state.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    BackgroundLoginComponent,
    NavbarComponent,
    HeaderComponent,
    EmptyStateComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormLoginComponent,
    ContributionComponent,
    PlansComponent,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
