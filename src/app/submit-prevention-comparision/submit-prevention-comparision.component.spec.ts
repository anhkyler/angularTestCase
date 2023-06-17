import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { SubmitPreventionComparisionComponent } from './submit-prevention-comparision.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('SubmitPreventionComparisionComponent', () => {
  let component: SubmitPreventionComparisionComponent;
  let fixture: ComponentFixture<SubmitPreventionComparisionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubmitPreventionComparisionComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports:[FormsModule, ReactiveFormsModule]
    });
    fixture = TestBed.createComponent(SubmitPreventionComparisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have as text `Prevent User submit form`',async(() => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#title_submit_prevention')?.textContent).toContain('Prevent User');
  }));

  it('should set submit button become disable',() => {
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css(".disable_button"));
    expect(button.nativeElement.disabled).toBeTruthy();
  });

  it('test a form element',() => {
    fixture.detectChanges();
    const formElement = fixture.debugElement.nativeElement.querySelector('#formGroupComparision');
    const nOSelectors = formElement.querySelectorAll('input');
    expect(nOSelectors.length).toEqual(3);
  });


  it('Check Initial Value of Form Group',() => {
    const formComparision = component.formGroupComparision;
    const values = {
      firstName: 'hieu',
      lastName:'so',
      phoneNumber:'1111231234'
    };

    expect(formComparision.value).toEqual(values);
  });

  it('Check value from both sides which are component and html', () => {
    const formEl: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#formGroupComparision')
                                      .querySelectorAll('input')[0];
    const firstNameValue = component.formGroupComparision.get('firstName');
    expect(formEl.value).toEqual(firstNameValue?.value);
  });

  it('Check value from both sides which are component and html', () => {
    const formEl: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#formGroupComparision')
                                      .querySelectorAll('input')[0];
    formEl.value="Suong";
    formEl.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const formComparision = component.formGroupComparision.get('firstName');
      expect(formComparision?.value).toEqual(formEl?.value);
    });
  });

  it('check button is enable if value is changed', () => {
    const formEl: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#formGroupComparision')
                                      .querySelectorAll('input')[0];
    formEl.value="Suong";
    formEl.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const formComparision = component.formGroupComparision.get('firstName');
      // expect(formComparision?.value).toEqual(formEl?.value);
      const button = fixture.debugElement.query(By.css(".disable_button"));
      expect(button.nativeElement.disabled).toBe(false);

    });
  });

});
