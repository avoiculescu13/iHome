import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalInspectionEditComponent } from './technical-inspection-edit.component';

describe('TechnicalInspectionEditComponent', () => {
  let component: TechnicalInspectionEditComponent;
  let fixture: ComponentFixture<TechnicalInspectionEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnicalInspectionEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicalInspectionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
