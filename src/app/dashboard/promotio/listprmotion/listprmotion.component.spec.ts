import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListprmotionComponent } from './listprmotion.component';

describe('ListprmotionComponent', () => {
  let component: ListprmotionComponent;
  let fixture: ComponentFixture<ListprmotionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListprmotionComponent]
    });
    fixture = TestBed.createComponent(ListprmotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
