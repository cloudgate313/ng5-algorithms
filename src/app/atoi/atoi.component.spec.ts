import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtoiComponent } from './atoi.component';

describe('AtoiComponent', () => {
  let component: AtoiComponent;
  let fixture: ComponentFixture<AtoiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtoiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
