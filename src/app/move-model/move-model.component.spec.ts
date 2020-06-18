import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveModelComponent } from './move-model.component';

describe('MoveModelComponent', () => {
  let component: MoveModelComponent;
  let fixture: ComponentFixture<MoveModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoveModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
