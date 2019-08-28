import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/question.service';

@Component({
  selector: 'app-dynamic-form-demo',
  templateUrl: './dynamic-form-demo.component.html',
  styleUrls: ['./dynamic-form-demo.component.scss']
})
export class DynamicFormDemoComponent implements OnInit {

  questions: any[];

  constructor(service: QuestionService) {
    this.questions = service.getQuestions();
  }
  ngOnInit() {
  }

}
