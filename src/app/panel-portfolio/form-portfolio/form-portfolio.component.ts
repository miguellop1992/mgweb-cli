import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-portfolio',
  templateUrl: './form-portfolio.component.html',
  styleUrls: ['./form-portfolio.component.css']
})
export class FormPortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // Editors ng-model bindings
  data: string = 'appendix';
  data2: string = 'content';
  
  // If you want add editors bindings to some model
  model: any = {
    data: this.data,
    data2: this.data2
  }
  
  // OnSubmit add current editors bindings to some model
  onSubmit() {
    this.model.data = this.data;
    this.model.data2 = this.data2;
  }

}
