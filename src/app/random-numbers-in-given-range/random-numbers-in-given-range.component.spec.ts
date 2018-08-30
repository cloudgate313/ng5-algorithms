import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomNumbersInGivenRangeComponent } from './random-numbers-in-given-range.component';

describe('RandomNumbersInGivenRangeComponent', () => {
  let component: RandomNumbersInGivenRangeComponent;
  let fixture: ComponentFixture<RandomNumbersInGivenRangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomNumbersInGivenRangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomNumbersInGivenRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
