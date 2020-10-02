import { Component, OnInit } from '@angular/core';
import { SurveyServiceService } from 'src/app/survey-service.service';

@Component({
  selector: 'app-show-survey',
  templateUrl: './show-survey.component.html',
  styleUrls: ['./show-survey.component.css'],
})
export class ShowSurveyComponent implements OnInit {
  constructor(private surveyServiceService: SurveyServiceService) {}
  Surveys: any = [];
  Modaltitle: string;
  Activate: boolean = false;
  survey: any;
  ngOnInit(): void {
    this.get();
  }
  add(): void {
    this.Modaltitle = 'Add new Survey';
    this.survey = {
      id: 0,
      title: '',
      description: '',
    };
    this.Activate = true;
  }
  edit(survey: any): void {
    this.survey = survey;
    this.Modaltitle = 'Edit ' + survey.title + ' survey';
    this.Activate = true;
  }
  delete(id: number): void {
    this.surveyServiceService.delete(id).subscribe((x) => {
      alert('Deleted!');
      this.get();
    });
  }
  get(): any {
    this.surveyServiceService.get().subscribe(
      (x) => {
        this.Surveys = x;
      },
      (x) => {
        alert(x.message);
        console.log(x);
      }
    );
  }
  notified($event): any {
    debugger;
    if ($event) {
      this.get();
      let ele: HTMLElement = document.getElementById('closepp');
      ele.click();
      this.Activate = false;
    }
  }
}
