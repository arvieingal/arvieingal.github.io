import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { HomecomponentsComponent } from './homecomponents/homecomponents.component';
import { ErrorComponent } from './errorcomponents/error.component';

export const routes: Routes = [
  { path: 'component', component: Component },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomecomponentsComponent },
  { path: '', component: LoginComponent },
  { path: 'error', component: ErrorComponent },
  { path: '**', redirectTo: '/error', pathMatch: 'full' },
];
