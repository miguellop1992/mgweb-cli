import { Injectable } from '@angular/core';
import { StorageService,StorageType } from './storage.service';
import { ICredential } from '../model/credential';

@Injectable()
export class AuthService {

  constructor(private storage: StorageService) { }

  isOpen(): boolean {
    return true;
  }

  open(cred: ICredential) {

    this.storage.init(StorageType.COOKIE).add("h1","ola").add("h2","hola");

    console.log(this.storage.get("h"));
    debugger
    this.storage.remove("h");

  }

  close() {

  }



}
