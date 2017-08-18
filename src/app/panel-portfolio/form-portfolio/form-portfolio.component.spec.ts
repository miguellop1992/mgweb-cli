import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPortfolioComponent } from './form-portfolio.component';

describe('FormPortfolioComponent', () => {
  let component: FormPortfolioComponent;
  let fixture: ComponentFixture<FormPortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
