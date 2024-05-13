import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifiercouleurComponent } from './modifiercouleur.component';

describe('ModifiercouleurComponent', () => {
  let component: ModifiercouleurComponent;
  let fixture: ComponentFixture<ModifiercouleurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifiercouleurComponent]
    });
    fixture = TestBed.createComponent(ModifiercouleurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
