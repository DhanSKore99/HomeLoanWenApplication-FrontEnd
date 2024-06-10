import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncludesRoutingModule } from './includes-routing.module';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { EMIcalcComponent } from './emicalc/emicalc.component';

import { SideNavComponent } from './side-nav/side-nav.component';
import { UserHeaderComponent } from './user-header/user-header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [
    EnquiryComponent,
    UserDashboardComponent,
    EMIcalcComponent,
    LoginComponent,
    SideNavComponent,
    UserHeaderComponent,
    UserLayoutComponent
  ],
  imports: [
    CommonModule,
    IncludesRoutingModule,
    ReactiveFormsModule,
    
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule
  ],
  exports:[
    EnquiryComponent,
    UserDashboardComponent,
    EMIcalcComponent,
    LoginComponent,
    SideNavComponent,
    UserHeaderComponent

  ]
})
export class IncludesModule { }
