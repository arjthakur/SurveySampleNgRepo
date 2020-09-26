import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurveyComponent } from './survey/survey.component';
import { ShowSurveyComponent } from './survey/show-survey/show-survey.component';
import { AddEditSurveyComponent } from './survey/add-edit-survey/add-edit-survey.component';
import { SurveyServiceService } from './survey-service.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PagesComponent } from './pages/pages.component';

@NgModule({
  declarations: [
    AppComponent,
    SurveyComponent,
    ShowSurveyComponent,
    AddEditSurveyComponent,
    PagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [SurveyServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
