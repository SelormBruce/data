import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutivelistComponent } from './executivelist.component';

describe('ExecutivelistComponent', () => {
  let component: ExecutivelistComponent;
  let fixture: ComponentFixture<ExecutivelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecutivelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecutivelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
