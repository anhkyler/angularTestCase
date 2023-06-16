import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitPreventionComparisionComponent } from './submit-prevention-comparision.component';

describe('SubmitPreventionComparisionComponent', () => {
  let component: SubmitPreventionComparisionComponent;
  let fixture: ComponentFixture<SubmitPreventionComparisionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubmitPreventionComparisionComponent]
    });
    fixture = TestBed.createComponent(SubmitPreventionComparisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
