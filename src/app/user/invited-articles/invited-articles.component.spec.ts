import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitedArticlesComponent } from './invited-articles.component';

describe('InvitedArticlesComponent', () => {
  let component: InvitedArticlesComponent;
  let fixture: ComponentFixture<InvitedArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvitedArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitedArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
