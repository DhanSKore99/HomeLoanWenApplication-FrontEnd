import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewEnquiryComponent } from './view-enquiry/view-enquiry.component';
import { ViewVerifiedEnquiryComponent } from './view-verified-enquiry/view-verified-enquiry.component';
import { ViewLoanApplicationComponent } from './view-loan-application/view-loan-application.component';
import { AddEnquiryComponent } from './add-enquiry/add-enquiry.component';

const routes: Routes = [
  {path:'view_enroll_enq',component:ViewEnquiryComponent},
  {path:'view_verified_enq',component:ViewVerifiedEnquiryComponent},
  {path:"register",component:AddEnquiryComponent},
  {path:'view_loan_app',component:ViewLoanApplicationComponent},
 
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReRoutingModule { }
