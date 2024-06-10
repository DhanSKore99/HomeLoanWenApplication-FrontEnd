import { Component } from '@angular/core';
import { Enquiry } from '../../../Model/enquiry';
import { EnquiryService } from '../../../../Services/enquiry.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-verified-enquiry',
  templateUrl: './view-verified-enquiry.component.html',
  styleUrl: './view-verified-enquiry.component.css'
})
export class ViewVerifiedEnquiryComponent {

  
  customerList:Enquiry[];

  constructor(private enquiryservice:EnquiryService,private router:Router){}
 
  ngOnInit(): void {
    
    this.enquiryservice.getAllEnquiry().subscribe(
      (data:Enquiry[])=>{
                        this.customerList=data;
                        }
    )
  }


  startRegistration( ) {
  
   this.router.navigateByUrl('homeloan/CRM/view_verified_enq/register');
   alert("Registration start email sent successfully")
    }


}
