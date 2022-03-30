import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalRevisionAddDialogComponent } from './technical-revision-add-dialog.component';

describe('TechnicalRevisionAddDialogComponent', () => {
  let component: TechnicalRevisionAddDialogComponent;
  let fixture: ComponentFixture<TechnicalRevisionAddDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnicalRevisionAddDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicalRevisionAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
