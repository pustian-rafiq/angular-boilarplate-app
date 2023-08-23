import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/envireonment';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<any> {
    return this.httpClient.get(`${environment.API_ENDPOINT}/users`);
  }

  getUserDetails(userId: number): Observable<any> {
    return this.httpClient.get(`${environment.API_ENDPOINT}/users/${userId}`);
  }
}
