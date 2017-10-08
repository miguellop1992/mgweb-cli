import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ApiHelper, ARest } from '../helper/api-helper';
import { IUser } from '../model/user';
import { AuthService } from '../security/auth.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';


@Injectable()
export class UserApiService extends ARest<IUser>{

  private static URL: string = ApiHelper.Instance.URL_API + "/user";

  constructor(private http: Http, auth?: AuthService) {
    super(auth);
  }

  put(value: IUser): Observable<IUser> {
    return this.http.post(`${UserApiService.URL}`, value,{ headers:this.getHeaders() })
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json() || 'Server error'));
  }

  get(id: number): Observable<IUser> {
    return this.http.get(`${UserApiService.URL}/${id}`)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json() || 'Server error'));
  }

}
