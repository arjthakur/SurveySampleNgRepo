import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginServiceService } from './login-service.service';

@Injectable({
  providedIn: 'root',
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private loginService: LoginServiceService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: 'Bearer ' + this.loginService.getToken(),
      },
    });
    return next.handle(tokenizedReq);
  }
}
