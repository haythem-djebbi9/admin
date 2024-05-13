import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListfeedbackComponent } from './listfeedback.component';

describe('ListfeedbackComponent', () => {
  let component: ListfeedbackComponent;
  let fixture: ComponentFixture<ListfeedbackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListfeedbackComponent]
    });
    fixture = TestBed.createComponent(ListfeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
