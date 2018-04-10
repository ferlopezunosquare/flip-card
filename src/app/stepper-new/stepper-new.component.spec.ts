import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperNewComponent } from './stepper-new.component';

describe('StepperNewComponent', () => {
  let component: StepperNewComponent;
  let fixture: ComponentFixture<StepperNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepperNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
