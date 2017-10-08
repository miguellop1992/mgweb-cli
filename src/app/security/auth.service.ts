import { Injectable } from '@angular/core';
import { StorageService, StorageType } from './storage.service';
import { ICredential } from '../model/credential';

@Injectable()
export class AuthService {

  private static KEY: string = "_cdl";

  private cdl: ICredential = null;

  constructor(private storage: StorageService) {
    this.loadCDL();
  }

  private loadCDL() {
    this.cdl = <ICredential>this.storage.autoDefine(AuthService.KEY,true);
  }

  isOpen(): boolean {
    return this.cdl != null;
  }

  open(cdl: ICredential): Promise<AuthService> {
    return new Promise((resolve, reject) => {
      if (this.cdl) {
        this.close();
      }
      this.storage.init((cdl.rememberme) ? StorageType.LOCAL : StorageType.SESSION);
      this.storage.add(AuthService.KEY, cdl);
      this.cdl = cdl;
      resolve(this);
    });
  }

  close() {
    return new Promise((resolve, reject) => {
      this.storage.remove(AuthService.KEY);
      this.cdl = null;
      resolve();
    });

  }

  get credential(){
    return this.cdl;
  }



}
