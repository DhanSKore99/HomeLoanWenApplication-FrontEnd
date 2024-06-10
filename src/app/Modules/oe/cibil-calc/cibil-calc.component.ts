import { Component, OnInit } from '@angular/core';
import { Enquiry } from '../../../Model/enquiry';
import { EnquiryService } from '../../../../Services/enquiry.service';

@Component({
  selector: 'app-cibil-calc',
  templateUrl: './cibil-calc.component.html',
  styleUrl: './cibil-calc.component.css'
})
export class CibilCalcComponent implements OnInit {


  constructor(private enquiryService:EnquiryService){}
 
  enq:Enquiry[];
 
  ngOnInit(): void {
    this.enquiryService.getForwardedCibilStatusDetails().subscribe(
      (data:Enquiry[])=>{
                        this.enq=data;
                      }
    )
  }

  CalculateCibil(u: Enquiry) {
    this.enquiryService.calculateCibil(u).subscribe();
    alert("Enquiry sent for CIBIL calculation.")
    u.isSent = true;
    window.location.reload();
 
    }

    



}
