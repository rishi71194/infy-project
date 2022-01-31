import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractindexComponent } from './contractindex.component';

describe('ContractindexComponent', () => {
  let component: ContractindexComponent;
  let fixture: ComponentFixture<ContractindexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractindexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
