import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectHeaderComponent } from './project-header.component';

describe('ProyectHeaderComponent', () => {
  let component: ProyectHeaderComponent;
  let fixture: ComponentFixture<ProyectHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProyectHeaderComponent]
    });
    fixture = TestBed.createComponent(ProyectHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
