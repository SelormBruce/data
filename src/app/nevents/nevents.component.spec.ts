import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeventsComponent } from './nevents.component';

describe('NeventsComponent', () => {
  let component: NeventsComponent;
  let fixture: ComponentFixture<NeventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
