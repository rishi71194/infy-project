import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BpcalculateComponent } from './bpcalculate.component';

describe('BpcalculateComponent', () => {
  let component: BpcalculateComponent;
  let fixture: ComponentFixture<BpcalculateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BpcalculateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BpcalculateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
