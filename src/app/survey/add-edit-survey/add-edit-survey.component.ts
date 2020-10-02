import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SurveyServiceService } from '../../survey-service.service';
@Component({
  selector: 'app-add-edit-survey',
  templateUrl: './add-edit-survey.component.html',
  styleUrls: ['./add-edit-survey.component.css'],
})
export class AddEditSurveyComponent implements OnInit {
  constructor(private surveyservice: SurveyServiceService) {}
  @Output() notify = new EventEmitter();

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
      this.notify.emit(true);
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
      this.notify.emit(true);
    });
  }
}
