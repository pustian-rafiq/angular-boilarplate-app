import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/envireonment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private info_key: string = 'user_info';
  private token_key: string = 'auth_token';

  constructor(private httpClient: HttpClient) {}

  login(loginData: any): Observable<any> {
    return this.httpClient.post(`${environment.API_URL}/auth/login`, loginData);
  }

  setToken(value: any) {
    localStorage.setItem(this.token_key, JSON.stringify(value));
  }

  getToken() {
    const token: any = localStorage.getItem(this.token_key);
    return JSON.parse(token);
  }
  setUserDetails(details: any) {
    localStorage.setItem(this.info_key, JSON.stringify(details));
  }

  getUserDetails() {
    const userDetsils: any = localStorage.getItem(this.info_key);
    return JSON.parse(userDetsils);
  }

  getBearerToken(): string {
    // return this.getToken() ? `Bearer ${this.getToken()}` : '';
    return this.getToken() ? `${this.getToken()}` : '';
  }
}
