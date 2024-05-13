import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutlivreurComponent } from './ajoutlivreur.component';

describe('AjoutlivreurComponent', () => {
  let component: AjoutlivreurComponent;
  let fixture: ComponentFixture<AjoutlivreurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutlivreurComponent]
    });
    fixture = TestBed.createComponent(AjoutlivreurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
