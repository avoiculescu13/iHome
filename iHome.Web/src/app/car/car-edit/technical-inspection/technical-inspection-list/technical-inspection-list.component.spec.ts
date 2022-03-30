import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalInspectionListComponent } from './technical-inspection-list.component';

describe('TechnicalInspectionListComponent', () => {
  let component: TechnicalInspectionListComponent;
  let fixture: ComponentFixture<TechnicalInspectionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnicalInspectionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicalInspectionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
