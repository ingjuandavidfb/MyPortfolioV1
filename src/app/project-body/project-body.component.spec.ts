import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectBodyComponent } from './project-body.component';

describe('ProjectBodyComponent', () => {
  let component: ProjectBodyComponent;
  let fixture: ComponentFixture<ProjectBodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectBodyComponent]
    });
    fixture = TestBed.createComponent(ProjectBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
