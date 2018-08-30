import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuplicateArrayElementComponent } from './duplicate-array-element.component';

describe('DuplicateArrayElementComponent', () => {
  let component: DuplicateArrayElementComponent;
  let fixture: ComponentFixture<DuplicateArrayElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuplicateArrayElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuplicateArrayElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
