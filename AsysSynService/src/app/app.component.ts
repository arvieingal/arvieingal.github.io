import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { Router } from '@angular/router';
import { HomecomponentsComponent } from './homecomponents/homecomponents.component';
import { LoginComponent } from './login/login.component'


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomecomponentsComponent,
    LoginComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AsysSynService';

}



