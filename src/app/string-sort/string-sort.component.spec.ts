import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StringSortComponent } from './string-sort.component';

describe('StringSortComponent', () => {
  let component: StringSortComponent;
  let fixture: ComponentFixture<StringSortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StringSortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StringSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
