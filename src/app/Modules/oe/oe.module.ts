import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OeRoutingModule } from './oe-routing.module';
import { CibilCalcComponent } from './cibil-calc/cibil-calc.component';
import { DocumentVerificationComponent } from './document-verification/document-verification.component';


@NgModule({
  declarations: [
    CibilCalcComponent,
    DocumentVerificationComponent
  ],
  imports: [
    CommonModule,
    OeRoutingModule
  ]
})
export class OeModule { }
