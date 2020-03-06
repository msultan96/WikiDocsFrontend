import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetaArticlesComponent } from './beta-articles.component';

describe('BetaArticlesComponent', () => {
  let component: BetaArticlesComponent;
  let fixture: ComponentFixture<BetaArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetaArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetaArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
