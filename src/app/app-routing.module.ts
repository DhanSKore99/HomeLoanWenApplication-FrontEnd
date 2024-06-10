import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './template/home/home.component';
import { UserLayoutComponent } from './includes/user-layout/user-layout.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent,loadChildren:()=>import('./template/template.module').then(file=>file.TemplateModule)},
  {path:'homeloan',component:UserLayoutComponent,children:[
    {path:'ADMIN', loadChildren:()=>import('./Modules/admin/admin.module' ).then(file=>file.AdminModule)},
    {path:'CRM', loadChildren:()=>import('./Modules/re/re.module' ).then(file=>file.ReModule)},
    {path:'AH', loadChildren:()=>import('./Modules/ah/ah.module' ).then(file=>file.AhModule)},
    {path:'OE', loadChildren:()=>import('./Modules/oe/oe.module' ).then(file=>file.OeModule)},
    {path:'CM', loadChildren:()=>import('./Modules/cm/cm.module' ).then(file=>file.CmModule)}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
