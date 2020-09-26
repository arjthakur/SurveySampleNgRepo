import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SurveyServiceService {
  readonly ApiUrl = 'https://mylocalhostsites.com/SurveyAPIs/survey';
  //readonly ApiUrl = 'https://localhost:5001/survey';
  //readonly ApiUrl = 'https://localhost:44381/survey';
  constructor(private http: HttpClient) {}

  get(): Observable<any[]> {
    return this.http.get<any>(this.ApiUrl);
  }
  post(model: any) {
    return this.http.post(this.ApiUrl, model);
  }
  put(model: any) {
    return this.http.put(this.ApiUrl, model);
  }
  delete(model: number) {
    return this.http.delete(this.ApiUrl + '/' + model);
  }
}
