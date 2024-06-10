import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../../../Services/employee.service';
import { EnquiryService } from '../../../../Services/enquiry.service';

@Component({
  selector: 'app-add-enquiry',
  templateUrl: './add-enquiry.component.html',
  styleUrl: './add-enquiry.component.css'
})
export class AddEnquiryComponent implements OnInit {


  firstFormGroup: FormGroup

  photo: any
  photosrc:any

  adharCard: any
  adharsrc:any

  panCard: any
  pansrc:any

  salarySlips: any
  salarysrc:any

  bankStatement: any
  bankstmtsrc:any

  addressProof: any
  addresssrc:any

  reader=new FileReader;

  onselectphoto(event) {
    this.photo = event.target.files[0]
    this.reader.onload=e=>
        this.photosrc=this.reader.result;
        this.reader.readAsDataURL(this.photo)
  }


  onselectaadhar(event) {
    this.adharCard = event.target.files[0]
    this.reader.onload=e=>
      this.adharsrc=this.reader.result;
      this.reader.readAsDataURL(this.adharCard)
  }
  onselectpan(event) {
    this.panCard = event.target.files[0]
    this.reader.onload=e=>
      this.pansrc=this.reader.result;
      this.reader.readAsDataURL(this.panCard)
  }
  onselecsalaryslip(event) {
    this.salarySlips = event.target.files[0]
    this.reader.onload=e=>
      this.salarysrc=this.reader.result;
      this.reader.readAsDataURL(this.salarySlips)
  }
  onselectbankstatement(event) {
    this.bankStatement = event.target.files[0]
    this.reader.onload=e=>
      this.bankstmtsrc=this.reader.result;
      this.reader.readAsDataURL(this.bankStatement)
  }
  onselectaddproof(event) {
    this.addressProof = event.target.files[0]
    this.reader.onload=e=>
      this.addresssrc=this.reader.result;
      this.reader.readAsDataURL(this.addressProof)
  }



  constructor(private _formBuilder: FormBuilder, private enquiryService: EnquiryService) { }


  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      customerName: ['', Validators.required],
      customerDateOfBirth: ['', Validators.required],
      customerGender: ['', Validators.required],
      maritalStatus: ['', Validators.required],
      loanAmount: ['', Validators.required],
      emailId: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      pancardNumber: ['', Validators.required],
      adhaarNumber: ['', Validators.required],
      address: ['', Validators.required],


      // ============================================================================
      customerBankDetails: this._formBuilder.group({
        bankName: ['', Validators.required],
        bankAccountNumber: ['', Validators.required],
        ifscCode: ['', Validators.required],

      }),


      // ============================================================================
      customerDocuments:this._formBuilder.group({
        VerificationStatus:[]
      }),






      // ============================================================================

      incomeDetails: this._formBuilder.group({
        profType: ['', Validators.required],

      }),


      // ============================================================================

      employmentdetails: this._formBuilder.group({
        employerName: ['', Validators.required],
        employerContact: ['', Validators.required],
        employerEmail: ['', Validators.required],
        workingFrom: ['', Validators.required],
        designation: ['', Validators.required],
        orgType: ['', Validators.required],

      }),

      // ============================================================================

      guarantorDetails: this._formBuilder.group({
        gurantorName: ['', Validators.required],
        relation: ['', Validators.required],
        mobileNumber: ['', Validators.required],
        designation: ['', Validators.required],
      }),


      // ============================================================================
      sanctionedloandetails: this._formBuilder.group({
        sanctionedLoanAmount: [],
        sanctionedTenure: [],
        emi: [],
        disbursedAmount: [],
        customerName: [],
        customerId: []

      }),




      // ============================================================================

      

      // ============================================================================

      previousLoanDetails: this._formBuilder.group({
        loanAmount: ['', Validators.required],
        loanTenure: ['', Validators.required],
        paidAmount: ['', Validators.required],
        remainingAmount: ['', Validators.required],
        bankName: ['', Validators.required],

      }),


      // ============================================================================

      propertyDetails: this._formBuilder.group({
        propertyAddress: ['', Validators.required],
        propertyName: ['', Validators.required],
        propertyStatus: ['', Validators.required],
        propertyAgreementAmount: ['', Validators.required],

      }),





    });


  }
  isLinear = false;

  registration() {
    var enq = JSON.stringify(this.firstFormGroup.value)
    const formdata = new FormData();
    formdata.append("photo", this.photo);
    console.log(this.photo);
    formdata.append("pancard", this.panCard);
    formdata.append("adharcard", this.adharCard);
    formdata.append("salarySlips", this.salarySlips);
    formdata.append("bankStatement", this.bankStatement);
    formdata.append("addressProof", this.addressProof);

    formdata.append("jsonData", enq)

    this.enquiryService.RegisterCustomer(formdata).subscribe();
    alert("You have registered successfully")



  }


  



}

