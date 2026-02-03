import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
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
