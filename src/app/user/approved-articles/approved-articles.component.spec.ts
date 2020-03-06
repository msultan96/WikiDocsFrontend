import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedArticlesComponent } from './approved-articles.component';

describe('ApprovedArticlesComponent', () => {
  let component: ApprovedArticlesComponent;
  let fixture: ComponentFixture<ApprovedArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovedArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovedArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
