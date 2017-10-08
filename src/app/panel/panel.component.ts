import { Component, OnInit } from '@angular/core';
import { AuthService } from '../security/auth.service';
import { URLHelper } from '../helper/url-helper';


@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit() {
  }

  logout(){
    this.auth.close().then(()=>{
      location.href=URLHelper.Instance.URL_HOME;
    });
  }

}
