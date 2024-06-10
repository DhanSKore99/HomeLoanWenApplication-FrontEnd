import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EnquiryService } from '../../../Services/enquiry.service';
import { Enquiry } from '../../Model/enquiry';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrl: './enquiry.component.css'
})
export class EnquiryComponent implements OnInit{

  formdata:FormGroup;
  constructor( private formbuilder:FormBuilder, private enquiryservice:EnquiryService){}
  ngOnInit(): void {
    this.formdata=this.formbuilder.group({
    enquiryId:[],
    firstName:[],
	  lastName:[],
	  dateOfBirth:[],
	  emailId:[],
    address:[],
	  adharcard:[],
    pancard:[],
    annualIncome:[],
    contactNo:[],
    cibilScore:[],
    cibilStatus:[]
    })
  
  }
  onSubmit() {
    this.enquiryservice.onSubmit(this.formdata.value).subscribe();
    alert("Loan Enquiry successfully submitted.Bank will notify you within 2 working days.")
  }
 


}
