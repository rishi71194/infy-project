import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemanddeliveryComponent } from './demanddelivery.component';

describe('DemanddeliveryComponent', () => {
  let component: DemanddeliveryComponent;
  let fixture: ComponentFixture<DemanddeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemanddeliveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemanddeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
