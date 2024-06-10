import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from '../includes/login/login.component';
import { EMIcalcComponent } from '../includes/emicalc/emicalc.component';
import { EnquiryComponent } from '../includes/enquiry/enquiry.component';

const routes: Routes = [
  {path:'',redirectTo:'header',pathMatch:'full'},
  {path:'about',component:AboutUsComponent},
  {path:'contact',component:ContactUsComponent},
  {path:'enquiry',component:EnquiryComponent},
  {path:'login',component:LoginComponent},
  {path:'emi',component:EMIcalcComponent},

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
