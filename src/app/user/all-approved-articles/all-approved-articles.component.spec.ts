import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllApprovedArticlesComponent } from './all-approved-articles.component';

describe('AllApprovedArticlesComponent', () => {
  let component: AllApprovedArticlesComponent;
  let fixture: ComponentFixture<AllApprovedArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllApprovedArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllApprovedArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
