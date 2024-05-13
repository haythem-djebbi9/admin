import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatepromotionComponent } from './createpromotion.component';

describe('CreatepromotionComponent', () => {
  let component: CreatepromotionComponent;
  let fixture: ComponentFixture<CreatepromotionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatepromotionComponent]
    });
    fixture = TestBed.createComponent(CreatepromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
