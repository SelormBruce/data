import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RFormComponent } from './rform.component';

describe('RFormComponent', () => {
  let component: RFormComponent;
  let fixture: ComponentFixture<RFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
