import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DependencyMatrixComponent } from './dependency-matrix.component';

describe('DependencyMatrixComponent', () => {
  let component: DependencyMatrixComponent;
  let fixture: ComponentFixture<DependencyMatrixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DependencyMatrixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DependencyMatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
