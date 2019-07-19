import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NnewsComponent } from './nnews.component';

describe('NnewsComponent', () => {
  let component: NnewsComponent;
  let fixture: ComponentFixture<NnewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NnewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
