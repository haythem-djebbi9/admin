import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutcouleurComponent } from './ajoutcouleur.component';

describe('AjoutcouleurComponent', () => {
  let component: AjoutcouleurComponent;
  let fixture: ComponentFixture<AjoutcouleurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutcouleurComponent]
    });
    fixture = TestBed.createComponent(AjoutcouleurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
