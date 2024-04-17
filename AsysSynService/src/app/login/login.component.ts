import { Component } from '@angular/core';
import { HomecomponentsComponent } from '../homecomponents/homecomponents.component';
import { FormsModule } from '@angular/forms';
// import { app } from '../../../server';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    HomecomponentsComponent,
    FormsModule,
  ],
  templateUrl: './login.component.html',  
  styleUrl: './login.component.css'
})
export class LoginComponent {
//   route: any;

//   constructor(private http: HttpClient) { }

//   login(formData: any) {
//     const username = formData.username;
//     const password = formData.password;
//     const zone = formData.zone;

//     // Make an HTTP POST request to your backend authentication endpoint
//     this.http.post<any>('YOUR_BACKEND_LOGIN_ENDPOINT', { username, password, zone }).subscribe({
//         next: () => {
//             this.route.navigate([])
//             // Redirect to the home page or perform any other action for successful login
//         },
//         error: () => {
//             this.showErrorAlert()
//             // Handle login failure, such as displaying an error message to the user
//         }
//     });
// }
//   showErrorAlert() {
//     throw new Error('Method not implemented.');
//   }

}
