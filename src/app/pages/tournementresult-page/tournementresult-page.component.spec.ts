import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournementresultPageComponent } from './tournementresult-page.component';

describe('TournementresultPageComponent', () => {
  let component: TournementresultPageComponent;
  let fixture: ComponentFixture<TournementresultPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournementresultPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournementresultPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
