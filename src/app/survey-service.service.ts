import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppSettings } from './appsettings';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SurveyServiceService {
  constructor(private http: HttpClient) {}

  get(): Observable<any[]> {
    return this.http.get<any>(AppSettings.SURVEY_ENDPOINT);
  }
  post(model: any) {
    return this.http.post(AppSettings.SURVEY_ENDPOINT, model);
  }
  put(model: any) {
    return this.http.put(AppSettings.SURVEY_ENDPOINT, model);
  }
  delete(model: number) {
    return this.http.delete(AppSettings.SURVEY_ENDPOINT + '/' + model);
  }
}
