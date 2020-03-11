import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialArticlesComponent } from './initial-articles.component';

describe('InitialArticlesComponent', () => {
  let component: InitialArticlesComponent;
  let fixture: ComponentFixture<InitialArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitialArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
