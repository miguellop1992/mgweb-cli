import { TestBed, inject } from '@angular/core/testing';

import { StorageService, StorageType } from './storage.service';

describe('StorageService', () => {
  
  let type:StorageType=StorageType.COOKIE;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StorageService]
    });
  });

  it('should ...', inject([StorageService], (service: StorageService) => {
    expect(service).toBeTruthy();
  }));

  it("Guardar los datos", inject([StorageService], (service: StorageService) => {
    service.init(type);
    service.add("test2", "test2");
    expect(service.get("test2")).toEqual("test2");
  }));

  it("Guardar los objecto", inject([StorageService], (service: StorageService) => {
    service.init(type);
    service.add("test1", { name: "test" });
    expect(service.get("test1", true)).toEqual({ name: "test" });
  }));

  it("Elimiar el dato", inject([StorageService], (service: StorageService) => {
    service.init(type);
    service.add("test3", "test3");
    service.remove("test3");
    expect(service.get("test3")).toEqual(null);
  }));

  it("Existe el dato", inject([StorageService], (service: StorageService) => {
    service.init(type);
    service.add("test4", "test4");
    expect(service.hasKey("test4")).toEqual(true);
  }));


  it("Elimiar todo", inject([StorageService], (service: StorageService) => {
    service.init(type);
    service.clear();
    expect(document.cookie).toEqual('');
  }));


});
