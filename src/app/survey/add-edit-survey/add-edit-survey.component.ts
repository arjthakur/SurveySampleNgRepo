import { Component, OnInit, Input } from '@angular/core';
import { SurveyServiceService } from '../../survey-service.service';
@Component({
  selector: 'app-add-edit-survey',
  templateUrl: './add-edit-survey.component.html',
  styleUrls: ['./add-edit-survey.component.css'],
})
export class AddEditSurveyComponent implements OnInit {
  constructor(private surveyservice: SurveyServiceService) {}

  @Input() survey: any;
  id: number;
  title: string;
  description: string;
  ngOnInit(): void {
    debugger;
    this.id = this.survey.id;
    this.title = this.survey.title;
    this.description = this.survey.description;
  }
  insert() {
    var model = {
      title: this.title,
      description: this.description,
    };
    this.surveyservice.post(model).subscribe((x) => {
      alert('Record added!');
    });
  }
  update() {
    var model = {
      id: this.id,
      title: this.title,
      description: this.description,
    };
    this.surveyservice.put(model).subscribe((x) => {
      alert('Record updated!');
    });
  }
}
