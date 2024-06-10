import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../../../Services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  implements OnInit{
  formdata:FormGroup;

  constructor( private formbuilder:FormBuilder,
                private empService:EmployeeService,
                private router:Router
              ){}


  ngOnInit(): void {
    this.formdata=this.formbuilder.group({
      username:[],
      password:[]

    })
  }

  onLogin() {
    let un:string=this.formdata.controls['username'].value;
    let ps:string=this.formdata.controls['password'].value;
  

    this.empService.login(un,ps).subscribe(
      (data:any)=>{
        if(data!=null) 
        {
        console.log(data);
        localStorage.setItem("username",data.username);
        localStorage.setItem("usertype",data.usertype);
        this.router.navigateByUrl(`/homeloan/${data.usertype}`  );
        }
        else
        {
          alert("Enter valid credentials");
        }
  
      }
    );
   
    
}




}
