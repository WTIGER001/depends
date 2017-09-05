import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorEdgeComponent } from './editor-edge.component';

describe('EditorEdgeComponent', () => {
  let component: EditorEdgeComponent;
  let fixture: ComponentFixture<EditorEdgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorEdgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorEdgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
