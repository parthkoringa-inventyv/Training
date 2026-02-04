import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  email: string = '';
  password: string = '';
  hidePassword: boolean = true;

  login()
  {
    this.authService.getAuthToken(this.email,this.password)
    .subscribe({
      next: (response) => {
        this.authService.saveToken(response);
        this.router.navigate(['']);
      },
      error: (error) => {
        console.error("login error: ",error);
        alert('Invalid Credentials');
      }
    })
  }
}