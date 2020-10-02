import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppSettings } from './appsettings';
@Injectable({
  providedIn: 'root',
})
export class LoginServiceService {
  getToken() {
    return localStorage.getItem('token');
  }
  constructor(private httpClient: HttpClient) {}
  login(username: string, password: string): Observable<any> {
    return this.httpClient.post(AppSettings.LOGIN_ENDPOINT, {
      username,
      password,
    });
  }
}
