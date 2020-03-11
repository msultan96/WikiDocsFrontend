import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscardedArticlesComponent } from './discarded-articles.component';

describe('DiscardedArticlesComponent', () => {
  let component: DiscardedArticlesComponent;
  let fixture: ComponentFixture<DiscardedArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscardedArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscardedArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
