import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurveyComponent } from './survey/survey.component';
import { ShowSurveyComponent } from './survey/show-survey/show-survey.component';
import { AddEditSurveyComponent } from './survey/add-edit-survey/add-edit-survey.component';
import { SurveyServiceService } from './survey-service.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PagesComponent } from './pages/pages.component';
import { LoginComponent } from './login/login.component';
import { LoginServiceService } from './login-service.service';
import { HomeComponent } from './home/home.component';
import { TokenInterceptorService } from './token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    SurveyComponent,
    ShowSurveyComponent,
    AddEditSurveyComponent,
    PagesComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    SurveyServiceService,
    LoginServiceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
