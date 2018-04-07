import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentInsertComponent } from './department-insert.component';

describe('DepartmentInsertComponent', () => {
  let component: DepartmentInsertComponent;
  let fixture: ComponentFixture<DepartmentInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
