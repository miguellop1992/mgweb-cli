import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { ApiHelper, ARest } from '../helper/api-helper';
import { ICredential } from '../model/credential';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';


@Injectable()
export class LoginApiService extends ARest<ICredential> {

  private static URL: string = ApiHelper.Instance.URL_API + "/login";
  
  constructor(private http:Http) {
    super()
  }

  post(value: ICredential): Observable<ICredential> {
    return this.http.post(`${LoginApiService.URL}/login`,value)
      .map((res:Response)=>res.json())
      .catch((error: any)=>Observable.throw(error.json() || 'Server error'));
  }

}
