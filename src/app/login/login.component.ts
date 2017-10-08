import { Component, OnInit } from '@angular/core';
import { LoginApiService } from '../api/login-api.service';
import { ICredential } from '../model/credential';
import { AuthService } from '../security/auth.service';
import { URLHelper } from '../helper/url-helper';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [
    LoginApiService
  ]
})

export class LoginComponent implements OnInit {
  public cred: ICredential;
  public error: string;

  constructor(
    private auth: AuthService,
    private loginApi: LoginApiService) { }

  ngOnInit() {
    this.cred = {
      email: null,
      password: null
    };

  }


  submit() {
    this.loginApi.post(this.cred).subscribe((_cred: ICredential) => {
      this.auth.open(_cred).then((value)=>{
        location.href=URLHelper.Instance.URL_PANEL;
      });
    }, (err) => {
      this.error = err.message;
    });

  }

}
