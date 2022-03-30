import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalRevisionEditComponent } from './technical-revision-edit.component';

describe('TechnicalRevisionEditComponent', () => {
  let component: TechnicalRevisionEditComponent;
  let fixture: ComponentFixture<TechnicalRevisionEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnicalRevisionEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicalRevisionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
