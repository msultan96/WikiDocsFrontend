import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedArticlesComponent } from './rejected-articles.component';

describe('RejectedArticlesComponent', () => {
  let component: RejectedArticlesComponent;
  let fixture: ComponentFixture<RejectedArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RejectedArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectedArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
