import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalInspectionAddDialogComponent } from './technical-inspection-add-dialog.component';

describe('TechnicalInspectionAddDialogComponent', () => {
  let component: TechnicalInspectionAddDialogComponent;
  let fixture: ComponentFixture<TechnicalInspectionAddDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnicalInspectionAddDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicalInspectionAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
