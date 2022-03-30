import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalRevisionListComponent } from './technical-revision-list.component';

describe('TechnicalRevisionListComponent', () => {
  let component: TechnicalRevisionListComponent;
  let fixture: ComponentFixture<TechnicalRevisionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnicalRevisionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicalRevisionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
