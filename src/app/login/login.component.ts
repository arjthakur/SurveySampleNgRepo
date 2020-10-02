import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  constructor(
    private loginService: LoginServiceService,
    private router: Router
  ) {
    this.username = 'MySurveyAdmin';
    this.password = 'Admin@Survey10001';
  }

  ngOnInit(): void {}
  login() {
    this.loginService.login(this.username, this.password).subscribe(
      (x) => {
        if (x.token) {
          localStorage.setItem('id', x.id);
          localStorage.setItem('firstname', x.firstName);
          localStorage.setItem('lastname', x.lastName);
          localStorage.setItem('roles', x.roles.join(','));
          localStorage.setItem('token', x.token);
          console.log(x);
          this.router.navigate(['/']);
        }
      },
      (e) => {
        console.log(e);
        if (e.status == 401) alert('Invalid usernamee or password supplied!');
        else alert(e.message);
      }
    );
  }
}
