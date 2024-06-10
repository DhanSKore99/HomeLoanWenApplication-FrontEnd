import { Component, Input, OnInit, input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../../../../Services/employee.service';
import { AddEmployee } from '../../../Model/add-employee';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent implements OnInit{
  formdata:FormGroup

 @Input() showEmployee:AddEmployee;

  constructor( private formbuilder:FormBuilder, private employeeservice:EmployeeService){}
  ngOnInit(): void {
    this.formdata=this.formbuilder.group({
      empname:[],
	    username:[],
	    password:[],
	    age:[],
	    usertype:[]

    })
  }

  onSubmit()
  {
    this.employeeservice.addEmployee(this.formdata.value).subscribe();
    console.log(this.formdata.value)
    console.log("Your Enquiry Submitted successfully");
    console.log("emp data added successfully")
  }


}
