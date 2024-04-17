import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomecomponentsComponent } from './homecomponents/homecomponents.component';
import { Routes,RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'Login', component:LoginComponent},
  {path: ''},
  {path: 'Home', component:HomecomponentsComponent},
  { path: '**', redirectTo: '/login' }
  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)   
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
