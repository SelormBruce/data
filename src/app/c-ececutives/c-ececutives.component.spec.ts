import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CEcecutivesComponent } from './c-ececutives.component';

describe('CEcecutivesComponent', () => {
  let component: CEcecutivesComponent;
  let fixture: ComponentFixture<CEcecutivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CEcecutivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CEcecutivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
