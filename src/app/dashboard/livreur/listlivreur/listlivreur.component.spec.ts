import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListlivreurComponent } from './listlivreur.component';

describe('ListlivreurComponent', () => {
  let component: ListlivreurComponent;
  let fixture: ComponentFixture<ListlivreurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListlivreurComponent]
    });
    fixture = TestBed.createComponent(ListlivreurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
