import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { ApiHelper, ARest } from '../helper/api-helper';
import { ICredential } from '../model/credential';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';


@Injectable()
export class LoginApiService extends ARest<ICredential> {


  constructor(private http:Http) {
    super()
  }

  post(credential: ICredential): Observable<ICredential> {
    return this.http.post(ApiHelper.Instance.URL_API+"/login",credential)
      .map((res:Response)=>res.json())
      .catch((error: any)=>Observable.throw(error.json() || 'Server error'));
  }

}
