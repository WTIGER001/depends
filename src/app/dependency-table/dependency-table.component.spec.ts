import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DependencyTableComponent } from './dependency-table.component';

describe('DependencyTableComponent', () => {
  let component: DependencyTableComponent;
  let fixture: ComponentFixture<DependencyTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DependencyTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DependencyTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
