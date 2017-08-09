import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelSettingComponent } from './panel-setting.component';

describe('PanelSettingComponent', () => {
  let component: PanelSettingComponent;
  let fixture: ComponentFixture<PanelSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
