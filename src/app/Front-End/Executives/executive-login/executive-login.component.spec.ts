import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutiveLoginComponent } from './executive-login.component';

describe('ExecutiveLoginComponent', () => {
  let component: ExecutiveLoginComponent;
  let fixture: ComponentFixture<ExecutiveLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecutiveLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecutiveLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
