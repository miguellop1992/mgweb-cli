import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiHelper {
    private static instance;

    public URL_API: string = 'http://' + document.domain + ':' + location.port + '/api/v1';

    private constructor() {

        if (!environment.production) {
            this.URL_API = 'http://localhost:8000/api/v1';
        }
    }

    public static get Instance(): ApiHelper {
        return this.instance || (this.instance = new ApiHelper());
    }


}


export interface IRest<T> {

    post(value: T): Observable<T>;

    put(value: T): Observable<T>;

    delete(id: any): Observable<T>;

    get(): Observable<T | T[]>;


}

export abstract class ARest<T> {

    post(value: T): Observable<T>{
        throw new Error("Not suppport");
    }

    put(value: T): Observable<T>{
        throw new Error("Not suppport");
    }

    delete(id: any): Observable<T>{
        throw new Error("Not suppport");
    }

    get(): Observable<T | T[]>{
        throw new Error("Not suppport");
    }


}

