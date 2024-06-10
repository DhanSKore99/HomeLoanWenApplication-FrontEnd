import { Component, OnInit } from '@angular/core';
import { EnquiryService } from '../../../../Services/enquiry.service';
import { Customer } from '../../../Model/customer';

@Component({
  selector: 'app-document-verification',
  templateUrl: './document-verification.component.html',
  styleUrl: './document-verification.component.css'
})
export class DocumentVerificationComponent implements OnInit {

  customerdetail:Customer[]
  data: [];

  constructor(private enquriyservice:EnquiryService){}


  ngOnInit(): void {
  
    
    this.enquriyservice.getRegisterCustomerDocuments().subscribe(
      (data:Customer[])=>{
        this.customerdetail=data;
        }
    )
  }
 

  
 
    Verify(cust:Customer)
    {
      
      this.enquriyservice.updateVerificationStatus(cust).subscribe();

    }

 }



