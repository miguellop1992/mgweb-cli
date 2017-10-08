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
    key = encodeURIComponent(key);
    let data: string = (typeof (value) === 'object') ? JSON.stringify(value) : value;
    localStorage.setItem(key, encodeURIComponent(data));
    return this;
  }

  get(key: string, isObject?): string | object {
    key = encodeURIComponent(key);
    let data = localStorage.getItem(key);

    if (!data) {
      return null;
    } else {
      data = decodeURIComponent(data);
      return (isObject) ? JSON.parse(data) : data;
    }
  }

  remove(key: string): IStorage {
    key = encodeURIComponent(key);
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
    key = encodeURIComponent(key);
    let data: string = (typeof (value) === 'object') ? JSON.stringify(value) : value;
    sessionStorage.setItem(key, encodeURIComponent(data));
    return this;
  }

  get(key: string, isObject?): string | object {
    key = encodeURIComponent(key);
    let data = sessionStorage.getItem(key);

    if (!data) {
      return null;
    } else {
      data = decodeURIComponent(data);
      return (isObject) ? JSON.parse(data) : data;
    }
  }

  remove(key: string): IStorage {
    key = encodeURIComponent(key);
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
    let cookieValue = cookie.split(";").filter((value) => value.trim().startsWith(encodeURIComponent(key)));

    if (!cookieValue[0]) {
      return null;
    }
    let decode = decodeURIComponent(cookieValue[0]);
    let value = decode.substr(decode.indexOf("=") + 1);

    return (!isObject) ? value : JSON.parse(value);
  }

  remove(key: string): IStorage {
    document.cookie = `${encodeURIComponent(key)}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
    return this;
  }


  clear(): IStorage {
    let cookies = document.cookie.split(";");
    cookies.forEach(el => {
      let key = el.substr(0, el.indexOf('=')).trim();
      this.remove(decodeURIComponent(key));
    });
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
  private store: IStorage;

  constructor() {
  }

  init(type = StorageType.SESSION): StorageService {

    switch (type) {
      case StorageType.LOCAL:
        if (typeof (localStorage) !== 'undefined') {
          this.store = new LocalStorage();
          break;
        }

      case StorageType.SESSION:
        if (typeof (sessionStorage) !== 'undefined') {
          this.store = new SessionStorage();
          break;
        }
      case StorageType.COOKIE:
        this.store = new CookieStorage();
        break;
    }

    return this;
  }

  autoDefine(key: string, isObject?): string | object {

    let value: string | object = this.init(StorageType.LOCAL).get(key, isObject);

    if (!value) {
      value = this.init(StorageType.SESSION).get(key, isObject);
      if (!value) {
        value = this.init(StorageType.COOKIE).get(key, isObject);
      }
    }
    return value;

  }


  add(key: string, value: string | object): IStorage {
    this.store.add(key, value);
    return this;
  }

  get(key: string, isObject?): string | object {
    return this.store.get(key, isObject);
  }

  remove(key: string): IStorage {
    this.store.remove(key);
    return this;
  }

  clear(): IStorage {
    this.store.clear();
    return this;
  }

  hasKey(key: string): boolean {
    return this.get(key) != null;
  }
}

