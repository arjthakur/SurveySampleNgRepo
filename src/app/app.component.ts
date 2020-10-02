import { Component } from '@angular/core';
import { SurveyComponent } from './survey/survey.component';
import { AuthGuard } from './auth.guard';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Survey';
  username: string = '';
  constructor(private router: Router) {}
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
  isLogin() {
    let login: boolean = !!localStorage.getItem('token');
    if (login)
      this.username =
        localStorage.getItem('firstname') +
        ' ' +
        localStorage.getItem('lastname');
    return login;
  }
}
