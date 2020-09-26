import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SurveyComponent } from './survey/survey.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  { path: 'survey', component: SurveyComponent },
  { path: 'pages', component: PagesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
