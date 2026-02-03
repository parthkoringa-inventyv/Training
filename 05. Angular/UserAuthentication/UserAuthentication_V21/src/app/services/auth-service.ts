import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AuthResponse } from '../interfaces/auth-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);

  getAuthToken(email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(
      'https://api.escuelajs.co/api/v1/auth/login',
      { email, password }
    );
  }

  saveToken(token: AuthResponse)
  {
    localStorage.setItem('access_token', token.access_token);
    localStorage.setItem('refresh_token', token.refresh_token);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('access_token');;
  }

  logout(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
  }
}
