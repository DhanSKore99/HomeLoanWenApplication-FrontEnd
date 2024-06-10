import { Component, OnInit } from '@angular/core';
import { EnquiryService } from '../../../../Services/enquiry.service';
import { Enquiry } from '../../../Model/enquiry';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-view-enquiry',
  templateUrl: './view-enquiry.component.html',
  styleUrl: './view-enquiry.component.css'
})
export class ViewEnquiryComponent implements OnInit{



  
  customerList:Enquiry[];
u: any;

  constructor(private enquiryservice:EnquiryService){}
 
  ngOnInit(): void {
    
    this.enquiryservice.getAllEnquiry().subscribe(
      (data:Enquiry[])=>{
                        this.customerList=data;
                        }
    )
  }

  
sendData(u:Enquiry) 
{
  console.log(u);
  this.enquiryservice.ForwardStatus(u).subscribe();
  
}



}
