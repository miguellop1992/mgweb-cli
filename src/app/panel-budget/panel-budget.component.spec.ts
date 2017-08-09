import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelBudgetComponent } from './panel-budget.component';

describe('PanelBudgetComponent', () => {
  let component: PanelBudgetComponent;
  let fixture: ComponentFixture<PanelBudgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelBudgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
