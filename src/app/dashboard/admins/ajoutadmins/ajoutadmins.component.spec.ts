import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutadminsComponent } from './ajoutadmins.component';

describe('AjoutadminsComponent', () => {
  let component: AjoutadminsComponent;
  let fixture: ComponentFixture<AjoutadminsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutadminsComponent]
    });
    fixture = TestBed.createComponent(AjoutadminsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
