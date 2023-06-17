import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import * as _ from 'lodash';

@Component({
  selector: 'app-submit-prevention-comparision',
  templateUrl: './submit-prevention-comparision.component.html',
  styleUrls: ['./submit-prevention-comparision.component.css']
})
export class SubmitPreventionComparisionComponent implements OnInit  {
  formGroupComparision!: UntypedFormGroup;
  testDate: any;
  originalData:any = null;
  disabledSubmittion:boolean = true;

  ngOnInit(): void {
    this.iniFormGroup();
    this.testDate = this.initTestData();
    this.loadTestDataToFormControl();
    if(this.originalData === null) this.originalData = this.onGetDataFormGroup();
    this.formGroupComparision.valueChanges.subscribe(x => {
      console.log('form value changed')
      console.log(x);
      console.log(_.isEqual(this.originalData, this.onGetDataFormGroup()));
       this.disabledSubmittion = (!_.isEqual(this.originalData, this.onGetDataFormGroup()))? false : true;
    });
    this.onGetDataFormGroup();
  }

  onGetDataFormGroup(){
    let formObj = this.formGroupComparision.getRawValue();
    let serializedForm = JSON.stringify(formObj);
    console.log(serializedForm);
    return serializedForm;
  }

  loadTestDataToFormControl() {
    this.formGroupComparision.setValue({
      firstName: this.testDate.firstName,
      lastName: this.testDate.lastName,
      phoneNumber: this.testDate.phoneNumber
    });
  }

  constructor(private fb: UntypedFormBuilder){}

  iniFormGroup(){
    this.formGroupComparision = new UntypedFormGroup({
      firstName: new UntypedFormControl(null),
      lastName: new UntypedFormControl(null),
      phoneNumber: new UntypedFormControl(null)
    });
  }

  initTestData(){
    return {
      firstName:'hieu',
      lastName:'so',
      phoneNumber:'1111231234'
    }
  }

  onSubmit(){
    console.log("ready to submit");
  }
}
