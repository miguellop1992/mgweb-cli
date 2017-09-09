import { Injectable } from '@angular/core';

interface IStorage {
  add(key: string, value: string | object): IStorage;
  get(key: string, isObject?): string | object;
  remove(key: string): IStorage;
  clear(): IStorage;
}

export class LocalStorage implements IStorage {

  constructor() { }

  add(key: string, value: string | object): IStorage {
    let data: string = (typeof (value) === 'object') ? JSON.stringify(value) : value;
    localStorage.setItem(key, data);
    return this;
  }

  get(key: string, isObject?): string | object {
    if (isObject) {
      return JSON.parse(localStorage.getItem(key));
    } else {
      return localStorage.getItem(key);
    }
  }

  remove(key: string): IStorage {
    localStorage.removeItem(key);
    return this;
  }

  clear(): IStorage {
    localStorage.clear();
    return this;
  }

}

export class SessionStorage implements IStorage {

  constructor() { }

  add(key: string, value: string | object): IStorage {
    let data: string = (typeof (value) === 'object') ? JSON.stringify(value) : value;
    sessionStorage.setItem(key, data);
    return this;
  }

  get(key: string, isObject?): string | object {
    if (!key) { return null; }
    if (isObject) {
      return JSON.parse(sessionStorage.getItem(key));
    } else {
      return sessionStorage.getItem(key);
    }
  }

  remove(key: string): IStorage {
    sessionStorage.removeItem(key);
    return this;
  }

  clear(): IStorage {
    sessionStorage.clear();
    return this;
  }

}


export class CookieStorage implements IStorage {

  constructor() { }

  add(key: string, value: string | object): IStorage {
    let data: string = (typeof (value) === 'object') ? JSON.stringify(value) : value;
    document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(data)}`;
    return this;
  }

  get(key: string, isObject?): string | object {
    let cookie = document.cookie;
    return cookie.split(";").filter((value) => value.startsWith(encodeURIComponent(key)))[0].trim();
  }

  remove(key: string): IStorage {
    document.cookie = `${encodeURIComponent(key)}=;`;
    return this;
  }

  clear(): IStorage {
    document.cookie = '';
    return this;
  }

}

export enum StorageType {
  LOCAL,
  SESSION,
  COOKIE
}


@Injectable()
export class StorageService implements IStorage {
  private stora: IStorage;

  constructor() {
  }

  init(type = StorageType.SESSION): StorageService {

    switch (type) {
      case StorageType.LOCAL:
        if (typeof (localStorage) !== 'undefined') {
          this.stora = new LocalStorage();
          break;
        }

      case StorageType.SESSION:
        if (typeof (sessionStorage) !== 'undefined') {
          this.stora = new SessionStorage();
          break;
        }
      case StorageType.COOKIE:
        this.stora = new CookieStorage();
        break;
    }

    return this;
  }

  add(key: string, value: string | object): IStorage {
    this.stora.add(key, value);
    return this;
  }

  get(key: string, isObject?): string | object {
    return this.stora.get(key, isObject);
  }

  remove(key: string): IStorage {
    this.stora.remove(key);
    return this;
  }

  clear(): IStorage {
    this.stora.clear();
    return this;
  }
}

