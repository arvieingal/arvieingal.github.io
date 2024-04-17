import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomecomponentsComponent } from './homecomponents/homecomponents.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    HomecomponentsComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    AppComponent,
    HomecomponentsComponent,
    NgModule,
    LoginComponent,
    RouterModule.forRoot(routes),
    FormsModule
  ]
})
export class AppModule { }

