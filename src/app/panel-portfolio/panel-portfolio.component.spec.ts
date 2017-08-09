import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelPortfolioComponent } from './panel-portfolio.component';

describe('PanelPortfolioComponent', () => {
  let component: PanelPortfolioComponent;
  let fixture: ComponentFixture<PanelPortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelPortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
