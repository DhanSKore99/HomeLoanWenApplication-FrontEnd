import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CibilCalcComponent } from './cibil-calc/cibil-calc.component';
import { DocumentVerificationComponent } from './document-verification/document-verification.component';

const routes: Routes = [
  {path:'cibil',component:CibilCalcComponent},
  {path:'verification',component:DocumentVerificationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OeRoutingModule { }
