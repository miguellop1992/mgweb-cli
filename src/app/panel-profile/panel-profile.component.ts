import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { INgxMyDpOptions, IMyDateModel } from 'ngx-mydatepicker';
import { LoginApiService } from 'app/api/login-api.service'
@Component({
  selector: 'app-panel-profile',
  templateUrl: './panel-profile.component.html',
  styleUrls: ['./panel-profile.component.css']
})
export class PanelProfileComponent implements OnInit {
  
  private myOptions: INgxMyDpOptions = {
    dateFormat: 'dd/mm/yyyy',
  };

  // Initialized to specific date (09.10.2018)
  private model: Object ;
  private tags=[];
  private form:FormGroup;

  constructor() { }

  ngOnInit() {
    // this.form = new FormGroup({
    //   name:[],
    // });
  }
  // optional date changed callback
  onDateChanged(event: IMyDateModel): void {
    // date selected
  }

  onTagsChanged($event){
    
  }


  // removeLastOnBackspace

}
